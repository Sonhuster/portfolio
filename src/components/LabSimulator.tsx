import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FlaskConical, 
  Zap, 
  Activity, 
  RotateCcw, 
  Cpu, 
  CheckCircle2, 
  ChevronRight, 
  Play, 
  Sparkles, 
  Flame, 
  TrendingUp, 
  Sliders, 
  Binary, 
  Info,
  Layers,
  Thermometer
} from "lucide-react";
import { experiments, profileData } from "../data";

interface AlignmentResult {
  matchString: string;
  comparison: string;
  identityPct: number;
  score: number;
  gaps: number;
  mutations: { pos: number; ref: string; alt: string; type: string }[];
}

export default function LabSimulator() {
  const [activeExpIdx, setActiveExpIdx] = useState<number>(0);
  const currentExp = experiments[activeExpIdx];

  // --- STATE FOR ELECTROPHORESIS ---
  const [gelPoured, setGelPoured] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isGelRunning, setIsGelRunning] = useState(false);
  const [gelProgress, setGelProgress] = useState(0);
  const [uvLight, setUvLight] = useState(false);

  // --- STATE FOR SPECTROPHOTOMETRY ---
  const [hours, setHours] = useState<number[]>([]);
  const [ods, setOds] = useState<number[]>([]);
  const [isInduced, setIsInduced] = useState(false);
  const [inductionHour, setInductionHour] = useState<number | null>(null);
  const [yieldResult, setYieldResult] = useState<string>("");

  // --- STATE FOR SEQUENCE ALIGNMENT ---
  const [seqA, setSeqA] = useState("ATGGGCTTCCTGGGCACCGTG");
  const [seqB, setSeqB] = useState("ATGGGCTTCATAAGCAGCGTG");
  const [alignment, setAlignment] = useState<AlignmentResult | null>(null);

  // Reset systems on experiment change
  useEffect(() => {
    resetElectrophoresis();
    resetSpectroscopy();
    runAlignment(seqA, seqB);
  }, [activeExpIdx]);

  // --- ELECTROPHORESIS METHODS ---
  const pourGel = () => {
    setGelPoured(true);
  };

  const loadSamples = () => {
    if (!gelPoured) return;
    setLoaded(true);
  };

  useEffect(() => {
    let interval: any;
    if (isGelRunning) {
      interval = setInterval(() => {
        setGelProgress((prev) => {
          if (prev >= 100) {
            setIsGelRunning(false);
            clearInterval(interval);
            return 100;
          }
          return prev + 5;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isGelRunning]);

  const startElectrophoresis = () => {
    if (!loaded) return;
    setIsGelRunning(true);
    setGelProgress(0);
    setUvLight(false);
  };

  const toggleUv = () => {
    if (gelProgress < 90) return;
    setUvLight(!uvLight);
  };

  const resetElectrophoresis = () => {
    setGelPoured(false);
    setLoaded(false);
    setIsGelRunning(false);
    setGelProgress(0);
    setUvLight(false);
  };

  // --- SPECTROSCOPY METHODS ---
  const addTimePoint = () => {
    if (hours.length >= 10) return;
    const nextHour = hours.length === 0 ? 0 : hours[hours.length - 1] + 1;
    let nextOd = 0.02;

    if (nextHour > 0) {
      // Calculate growth curve OD
      // Lag phase -> Log phase -> Stationary phase
      if (nextHour < 2) {
        nextOd = Number((0.02 + nextHour * 0.05).toFixed(2));
      } else if (nextHour < 6) {
        // Log phase exponential jump
        nextOd = Number((0.12 * Math.pow(1.8, nextHour - 1)).toFixed(2));
      } else {
        // Approaching stationary
        const maxLimit = 2.4;
        const prevOd = ods[ods.length - 1];
        nextOd = Number((prevOd + (maxLimit - prevOd) * 0.25).toFixed(2));
      }
    }

    setHours([...hours, nextHour]);
    setOds([...ods, nextOd]);
  };

  const induceIPTG = () => {
    if (hours.length === 0) return;
    const currentHour = hours[hours.length - 1];
    setIsInduced(true);
    setInductionHour(currentHour);

    const currentOd = ods[ods.length - 1];
    // Golden window of OD600 is 0.6 - 0.9 (around hour 3 or 4)
    if (currentOd >= 0.5 && currentOd <= 0.95) {
      setYieldResult("Chúc mừng! Bạn cảm ứng đúng 'Thời điểm vàng' (OD600 = " + currentOd + "). Hiệu suất biểu hiện protein HL-PET1 đạt cực đại: 94% tinh sạch.");
    } else if (currentOd < 0.5) {
      setYieldResult("Quá sớm! Mật độ tế bào E. coli còn quá loãng (OD600 = " + currentOd + "). Vi khuẩn bị ngộ độc IPTG trước khi sinh khối, hiệu suất protein cực kém: 12%.");
    } else {
      setYieldResult("Trễ mất rồi! Vi khuẩn E. coli đã bước vào pha suy thoái (OD600 = " + currentOd + "). Tế bào đã già, protein bị vón cục tích tụ (Inclusion Bodies) khó tinh sạch: 28%.");
    }
  };

  const resetSpectroscopy = () => {
    setHours([]);
    setOds([]);
    setIsInduced(false);
    setInductionHour(null);
    setYieldResult("");
  };

  // --- ALIGNMENT METHODS ---
  const runAlignment = (alignA: string, alignB: string) => {
    const a = alignA.toUpperCase().replace(/[^ATGC]/g, "");
    const b = alignB.toUpperCase().replace(/[^ATGC]/g, "");
    
    let matchString = "";
    let comparison = "";
    let matchCount = 0;
    const mutations: { pos: number; ref: string; alt: string; type: string }[] = [];

    const len = Math.max(a.length, b.length);
    for (let i = 0; i < len; i++) {
      const charA = a[i] || "-";
      const charB = b[i] || "-";

      matchString += charA;
      comparison += charB;

      if (charA === charB && charA !== "-") {
        matchCount++;
      } else {
        if (charA !== "-" && charB !== "-") {
          mutations.push({
            pos: i + 1,
            ref: charA,
            alt: charB,
            type: "Đột biến điểm (Substitution)"
          });
        } else if (charA === "-") {
          mutations.push({
            pos: i + 1,
            ref: "-",
            alt: charB,
            type: "Thêm nuclêôtit (Insertion)"
          });
        } else {
          mutations.push({
            pos: i + 1,
            ref: charA,
            alt: "-",
            type: "Mất nuclêôtit (Deletion)"
          });
        }
      }
    }

    const identityPct = len > 0 ? Math.round((matchCount / len) * 100) : 0;
    // Score system: +2 for match, -1 for mismatch, -2 for gap
    let score = 0;
    let gaps = 0;
    for (let i = 0; i < len; i++) {
      const charA = a[i] || "-";
      const charB = b[i] || "-";
      if (charA === "-" || charB === "-") {
        score -= 2;
        gaps++;
      } else if (charA === charB) {
        score += 2;
      } else {
        score -= 1;
      }
    }

    setSeqA(a);
    setSeqB(b);
    setAlignment({
      matchString,
      comparison,
      identityPct,
      score,
      gaps,
      mutations
    });
  };

  return (
    <div id="lab-simulator-card" className="bg-white rounded-2xl border border-[#e9ecef] shadow-xs overflow-hidden">
      {/* Header Panel */}
      <div className="bg-slate-900 text-white p-6 md:p-8 border-b border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
              <FlaskConical className="w-3.5 h-3.5" /> Virtual Lab Area (Thực hành Ảo)
            </span>
            <h3 className="text-2xl font-display font-medium tracking-tight">
              Sở thị Công việc Nghiên cứu của Nhà Khoa học
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Khám phá thực tế các thí nghiệm Wet Lab & Dry Lab mà Sơn chạy hằng tuần ngay trên trình duyệt của bạn.
            </p>
          </div>
          
          <div className="flex bg-slate-800/80 p-1 rounded-xl border border-slate-700/60 self-start md:self-center">
            {experiments.map((exp, idx) => (
              <button
                key={exp.id}
                id={`btn-select-exp-${exp.id}`}
                onClick={() => setActiveExpIdx(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-300 ${
                  activeExpIdx === idx 
                    ? "bg-blue-600 text-white font-semibold shadow-xs"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                {exp.category === "Wet Lab" ? <FlaskConical className="w-3" /> : <Cpu className="w-3" />}
                {exp.category}
              </button>
            ))}
          </div>
        </div>

        {/* Experiment selector tab line */}
        <div className="grid grid-cols-3 gap-2 mt-6 border-t border-slate-800/80 pt-4">
          {experiments.map((exp, idx) => (
            <button
              key={exp.id}
              id={`tab-exp-${exp.id}`}
              onClick={() => setActiveExpIdx(idx)}
              className={`text-left p-3 rounded-xl transition-all duration-300 border ${
                activeExpIdx === idx
                  ? "bg-slate-800/80 border-blue-500/40 text-white shadow-inner"
                  : "bg-transparent border-transparent hover:bg-slate-800/30 text-slate-400 hover:text-slate-200"
              }`}
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Thí nghiệm 0{idx + 1}</div>
              <div className="font-display font-medium text-xs md:text-sm truncate mt-0.5">{exp.title.split("(")[0].trim()}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Sandbox Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Column: Experiment Details & Target */}
        <div className="lg:col-span-5 p-6 md:p-8 bg-slate-50/50 border-r border-slate-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-medium uppercase ${
                currentExp.category === "Wet Lab" 
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "bg-amber-50 text-amber-700 border border-amber-200"
              }`}>
                {currentExp.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">ID: {currentExp.id}</span>
            </div>

            <h4 className="text-xl font-display font-semibold text-slate-900 leading-tight">
              {currentExp.title}
            </h4>
            
            <div className="mt-4 p-4 bg-white rounded-xl border border-slate-200/60 shadow-xs">
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-blue-500" /> Mục tiêu Khoa học:
              </div>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                {currentExp.objective}
              </p>
            </div>

            {/* Equipment/Tools */}
            <div className="mt-5">
              <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                Vật tư & Công cụ sử dụng:
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {currentExp.equipment.map((eq, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 text-slate-700 font-mono border border-slate-200/50">
                    {eq}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Procedure guide */}
          <div className="mt-8 pt-6 border-t border-slate-200/60">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-mono mb-3">
              Quy Trình Chuẩn (SOP Steps):
            </div>
            <div className="space-y-3.5">
              {currentExp.steps.map((st) => (
                <div key={st.number} className="flex gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[10px] flex items-center justify-center font-bold">
                    {st.number}
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-800">{st.title}</h5>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">{st.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sandbox Simulator Core */}
        <div className="lg:col-span-7 p-6 md:p-8 bg-slate-900 border-t lg:border-t-0 border-slate-800 text-slate-300 flex flex-col justify-between min-h-[460px]">
          
          <div className="w-full flex-grow flex flex-col justify-center">
            
            {/* 1. INDIVIDUAL SIMULATOR COMPONENT: ELECTROPHORESIS */}
            {currentExp.simulationType === "electrophoresis" && (
              <div className="space-y-6">
                <div className="text-center mb-2">
                  <h5 className="font-mono text-sm text-emerald-400 flex items-center justify-center gap-1.5">
                    <Layers className="w-4 h-4" /> Hệ máy phân tích Agarose Gel BioRad 3000
                  </h5>
                  <p className="text-xs text-slate-500 mt-1">Sử dụng lực điện động để phân tách gien dựa trên trọng lượng phân tử.</p>
                </div>

                <div className="flex justify-center">
                  {/* The BioRad Tube & Agarose Box Container */}
                  <div className="relative w-72 h-44 bg-slate-950 rounded-2xl border-2 border-slate-800 p-4 shadow-2xl flex flex-col justify-between overflow-hidden">
                    {/* Glowing Electrode Rails */}
                    <div className="absolute top-1 left-4 right-4 h-1.5 bg-red-600/30 rounded flex items-center justify-between px-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[7px] font-mono text-red-500 font-bold">Cực Âm (-)</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    </div>

                    <div className="absolute bottom-1 left-4 right-4 h-1.5 bg-blue-600/30 rounded flex items-center justify-between px-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      <span className="text-[7px] font-mono text-blue-400 font-bold">Cực Dương (+)</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    </div>

                    {/* The Agarose Gel Board */}
                    <div className={`relative flex-grow mx-2 my-2.5 rounded border transition-all duration-500 ${
                      uvLight 
                        ? "bg-violet-950 border-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.3)]" 
                        : gelPoured 
                          ? "bg-slate-900/60 border-slate-700" 
                          : "bg-slate-950 border-dashed border-slate-800"
                    } flex items-stretch p-3 gap-6`}>
                      
                      {!gelPoured && (
                        <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-600 font-mono">
                          Khay điện di trống
                        </div>
                      )}

                      {gelPoured && (
                        <>
                          {/* Well Indicators on top */}
                          <div className="absolute top-2 left-6 right-6 h-3 flex justify-around">
                            <span className={`w-6 h-2 rounded-b border-x border-b transition-colors ${loaded ? "bg-indigo-600 border-indigo-400" : "bg-slate-800 border-slate-700"}`} />
                            <span className={`w-6 h-2 rounded-b border-x border-b transition-colors ${loaded ? "bg-emerald-600 border-emerald-400" : "bg-slate-800 border-slate-700"}`} />
                          </div>

                          {/* Lanes */}
                          <div className="w-full flex justify-around mt-4 relative">
                            {/* Running Bubbles feedback */}
                            {isGelRunning && (
                              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none overflow-hidden opacity-40">
                                {[...Array(6)].map((_, i) => (
                                  <div 
                                    key={i} 
                                    className="w-1 h-1 bg-white rounded-full animate-ping self-center" 
                                    style={{ animationDelay: `${i * 0.4}s`, animationDuration: "1s" }} 
                                  />
                                ))}
                              </div>
                            )}

                            {/* Lane 1: Thang DNA 1kb (Ladder) */}
                            <div className="w-8 flex flex-col justify-start relative">
                              <span className="absolute -top-1 left-0 right-0 text-[7px] text-center font-mono text-slate-500">Mẫu Đơn</span>
                              
                              {/* Glowing bands under UV */}
                              {uvLight && (
                                <div className="absolute inset-x-0 top-0 bottom-0 flex flex-col justify-around text-center">
                                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="h-1 bg-amber-400 shadow-[0_0_6px_#f59e0b] mx-0.5 rounded" style={{ marginTop: "10%" }} />
                                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="h-1 bg-amber-400 shadow-[0_0_6px_#f59e0b] mx-0.5 rounded" style={{ marginTop: "15%" }} />
                                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="h-1 bg-amber-400 shadow-[0_0_6px_#f59e0b] mx-0.5 rounded" style={{ marginTop: "20%" }} />
                                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="h-1 bg-amber-400 shadow-[0_0_6px_#f59e0b] mx-0.5 rounded" style={{ marginTop: "25%" }} />
                                </div>
                              )}

                              {/* Progressing band dye when running (visible under normal light) */}
                              {isGelRunning && (
                                <div 
                                  className="absolute w-full h-1 bg-indigo-500 rounded transition-all duration-300"
                                  style={{ top: `${gelProgress}%` }}
                                />
                              )}
                              {!isGelRunning && gelProgress === 100 && !uvLight && (
                                <div className="absolute w-full h-1 bg-indigo-500 opacity-60 rounded bottom-0" />
                              )}
                            </div>

                            {/* Lane 2: Sản phẩm gen HL-PET1 */}
                            <div className="w-8 flex flex-col justify-start relative">
                              <span className="absolute -top-1 left-0 right-0 text-[7px] text-center font-mono text-emerald-400">HL-PET1</span>
                              
                              {/* PCR Band Target 1.5kb glowing under UV */}
                              {uvLight && (
                                <div className="absolute inset-x-0 top-0 bottom-0 text-center">
                                  {/* The true target band aligned horizontally with Ladder's 1.5kb band */}
                                  <motion.div 
                                    initial={{ opacity: 0, scale: 0.5 }} 
                                    animate={{ opacity: 1, scale: 1 }} 
                                    className="absolute h-1 bg-emerald-400 shadow-[0_0_8px_#34d399] left-0 right-0 rounded" 
                                    style={{ top: "35%" }} // Equivalent to ~1500 bp band
                                  />
                                </div>
                              )}

                              {/* Dye band */}
                              {isGelRunning && (
                                <div 
                                  className="absolute w-full h-1 bg-indigo-500 rounded transition-all duration-300"
                                  style={{ top: `${gelProgress}%` }}
                                />
                              )}
                              {!isGelRunning && gelProgress === 100 && !uvLight && (
                                <div className="absolute w-full h-1 bg-indigo-500 opacity-60 rounded bottom-0" />
                              )}
                            </div>

                          </div>
                        </>
                      )}

                    </div>
                  </div>
                </div>

                {/* Simulated Lab Controls */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <button
                    id="btn-pour-gel"
                    onClick={pourGel}
                    disabled={gelPoured}
                    className={`px-3 py-2 rounded-xl border text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all ${
                      gelPoured 
                        ? "bg-slate-800/40 border-slate-800 text-slate-600 cursor-not-allowed"
                        : "bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200"
                    }`}
                  >
                    1. Đổ Gel Agarose
                  </button>

                  <button
                    id="btn-load-samples"
                    onClick={loadSamples}
                    disabled={!gelPoured || loaded}
                    className={`px-3 py-2 rounded-xl border text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all ${
                      !gelPoured || loaded
                        ? "bg-slate-800/40 border-slate-800 text-slate-600 cursor-not-allowed"
                        : "bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200"
                    }`}
                  >
                    2. Nạp Mẫu DNA
                  </button>

                  <button
                    id="btn-run-voltage"
                    onClick={startElectrophoresis}
                    disabled={!loaded || isGelRunning || gelProgress === 100}
                    className={`px-3 py-2 rounded-xl border text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all ${
                      !loaded || isGelRunning || gelProgress === 100
                        ? "bg-slate-800/40 border-slate-800 text-slate-600 cursor-not-allowed"
                        : "bg-blue-600 border-blue-500 hover:bg-blue-500 text-white font-semibold"
                    }`}
                  >
                    {isGelRunning ? `Bơm Điện (${gelProgress}%)` : "3. Chạy Điện Phổ"}
                  </button>

                  <button
                    id="btn-toggle-uv"
                    onClick={toggleUv}
                    disabled={gelProgress < 90}
                    className={`px-3 py-2 rounded-xl border text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all ${
                      gelProgress < 90
                        ? "bg-slate-800/40 border-slate-800 text-slate-600 cursor-not-allowed"
                        : uvLight
                          ? "bg-violet-600 border-violet-500 hover:bg-violet-500 text-white font-semibold shadow-[0_0_10px_rgba(139,92,246,0.3)] animate-pulse"
                          : "bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200"
                    }`}
                  >
                    {uvLight ? "Tắt Đèn UV ✖" : "4. Soi UV Đọc Gien"}
                  </button>
                </div>

                {/* Experimental Feedback */}
                <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 text-xs text-slate-400 font-mono space-y-1">
                  <div className="flex items-center gap-2 text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" /> State Logs:
                  </div>
                  {!gelPoured && <div className="text-slate-500">Vui lòng bấm 'Đổ Gel Agarose' để pha chế đệm ADN agarose và đặt phao lược giếng.</div>}
                  {gelPoured && !loaded && <div className="text-blue-400">➢ Gel agarose hóa đặc thành công. Hãy cẩn thận dùng pipette nạp các mẫu DNA vào giếng tương ứng.</div>}
                  {loaded && !isGelRunning && gelProgress === 0 && <div className="text-amber-400">➢ Giếng 1: Phao đo chuẩn (1kb Ladder). Giếng 2: DNA gen nấm của bạn. Hãy đóng nắp bật luồng điện 100V.</div>}
                  {isGelRunning && (
                    <div className="text-blue-400 animate-pulse">
                      ⚡ Đang chạy điện ly tích cực... Ion H+ sủi bọt khí cực âm... DNA chuyển dịch về điện cực kẽ dải âm... ({gelProgress}%)
                    </div>
                  )}
                  {gelProgress === 100 && !uvLight && (
                    <div className="text-violet-400">
                      ✓ Đạt pha hoàn tất điện di! Dải màu chỉ thị bromophenol blue đã di chuyển chạm vách đáy. BẬT SOO UV để xem băng gien phát huỳnh quang.
                    </div>
                  )}
                  {uvLight && (
                    <div className="text-blue-300 font-bold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Băng sáng xuất hiện tại vạch ~1,500 bp! Đúng hoàn hảo với kích cỡ lý thuyết của gien mã hóa enzyme HL-PET1. Sinh bản nhân dòng tối ưu thành công!
                    </div>
                  )}
                </div>

                <button
                  id="btn-reset-gel"
                  onClick={resetElectrophoresis}
                  className="mx-auto flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors font-mono"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Khởi tạo lại thiết lập bể điện di
                </button>
              </div>
            )}


            {/* 2. INDIVIDUAL SIMULATOR COMPONENT: SPECTROPHOTOMETRY */}
            {currentExp.simulationType === "spectroscopy" && (
              <div className="space-y-6">
                <div className="text-center mb-1">
                  <h5 className="font-mono text-sm text-blue-400 flex items-center justify-center gap-1.5">
                    <TrendingUp className="w-4 h-4" /> Hệ đo Optical Density Eppendorf 600
                  </h5>
                  <p className="text-xs text-slate-500 mt-1">Dựng biểu đồ sinh trưởng sinh khối vi sinh vật E. coli nuôi cấy.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  
                  {/* Digital screen reading and curve */}
                  <div className="md:col-span-8 bg-slate-950 rounded-2xl border border-slate-800 p-4 h-52 flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                      <span className="text-[10px] uppercase font-mono text-slate-500 tracking-widest">Eppendorf Graph Panel v2.4</span>
                      <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                        <Activity className="w-3 h-3 animate-pulse" /> Live Probe Sensor
                      </span>
                    </div>

                    {/* Chart Frame */}
                    <div className="relative flex-grow h-32 mt-3 flex items-end justify-between px-2 pb-5 border-l border-b border-slate-800">
                      
                      {/* Vertical Grid markers */}
                      <span className="absolute left-1 top-2 text-[8px] font-mono text-slate-600">OD=2.5</span>
                      <span className="absolute left-1 top-16 text-[8px] font-mono text-slate-600">OD=1.0</span>
                      <span className="absolute left-1 bottom-6 text-[8px] font-mono text-slate-600">OD=0.1</span>
                      
                      {/* Timeline labels */}
                      <div className="absolute inset-x-0 bottom-0.5 flex justify-between text-[8px] text-slate-600 font-mono px-3">
                        <span>H0</span>
                        <span>H2</span>
                        <span>H4</span>
                        <span>H6</span>
                        <span>H8</span>
                        <span>H10</span>
                      </div>

                      {/* OD Points and connecting lines */}
                      {hours.length === 0 ? (
                        <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-700 font-mono">
                          Bấm nút cấy khuẩn để nạp biểu đồ đo sinh trưởng...
                        </div>
                      ) : (
                        hours.map((hr, idx) => {
                          const odValue = ods[idx];
                          // Map value to heights max 2.5 OD -> 100% height
                          const heightPct = Math.min((odValue / 2.5) * 100, 100);
                          const isGoldenRegion = odValue >= 0.6 && odValue <= 0.85;

                          return (
                            <div key={hr} className="relative flex-grow flex flex-col items-center group">
                              {/* Glowing point bubble */}
                              <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className={`w-2.5 h-2.5 rounded-full z-10 transition-colors shadow-lg cursor-help ${
                                  inductionHour === hr
                                    ? "bg-violet-500 shadow-[0_0_8px_#8b5cf6]"
                                    : isGoldenRegion 
                                      ? "bg-sky-400 shadow-[0_0_8px_#38bdf8]"
                                      : "bg-blue-600 hover:bg-white"
                                }`}
                                style={{ transform: `translateY(-${heightPct * 0.8}px)` }}
                              />
                              
                              {/* Hover data label */}
                              <div className="absolute bottom-10 bg-slate-900 border border-slate-700 text-[9px] px-1 py-0.5 rounded font-mono hidden group-hover:block whitespace-nowrap z-20">
                                Giờ: {hr} | OD: {odValue}
                              </div>
                            </div>
                          );
                        })
                      )}

                      {/* Golden Induction Target Zone Indicator Ribbon */}
                      {hours.length > 0 && (
                        <div className="absolute bottom-7 left-0 right-0 h-4 bg-blue-500/5 border-y border-blue-500/10 pointer-events-none flex items-center justify-end px-3">
                          <span className="text-[7px] font-mono text-blue-400/85">Khu vực cảm ứng tỉ lệ vàng (OD600: 0.6 - 0.85)</span>
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Left panel measurements */}
                  <div className="md:col-span-4 space-y-3">
                    <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-center">
                      <div className="text-[9px] text-slate-500 font-mono uppercase">Lần đo cuối (OD600)</div>
                      <div className="text-3xl font-display font-bold text-white mt-1">
                        {ods.length > 0 ? ods[ods.length - 1] : "0.00"}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 mt-1">
                        Giờ thứ: {hours.length > 0 ? hours[hours.length - 1] : "0"}
                      </div>
                    </div>

                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex justify-between items-center">
                      <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <Thermometer className="w-3 h-3 text-red-500" /> Nhiệt độ tủ:
                      </span>
                      <span className="text-xs font-mono text-white font-semibold">37 °C</span>
                    </div>
                  </div>

                </div>

                {/* Simulated Handlers Controls */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    id="btn-add-time-point"
                    onClick={addTimePoint}
                    disabled={hours.length >= 10 || isInduced}
                    className={`px-4 py-2.5 rounded-xl border text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all ${
                      hours.length >= 10 || isInduced
                        ? "bg-slate-800/40 border-slate-800 text-slate-600 cursor-not-allowed"
                        : "bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200"
                    }`}
                  >
                    🚀 Bơm khuẩn / Đo ODh+ (H{hours.length})
                  </button>

                  <button
                    id="btn-induce-iptg"
                    onClick={induceIPTG}
                    disabled={hours.length === 0 || isInduced}
                    className={`px-4 py-2.5 rounded-xl border text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all ${
                      hours.length === 0 || isInduced
                        ? "bg-slate-800/40 border-slate-800 text-slate-600 cursor-not-allowed"
                        : "bg-violet-600 border-violet-500 hover:bg-violet-500 text-white font-semibold shadow-lg shadow-violet-900/30"
                    }`}
                  >
                    🧬 Đổ IPTG Cảm Ứng Protein
                  </button>
                </div>

                {yieldResult && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl border text-xs font-mono leading-relaxed ${
                      yieldResult.includes("Chúc mừng")
                        ? "bg-emerald-950/85 border-emerald-500/30 text-emerald-300"
                        : "bg-amber-950/80 border-amber-500/30 text-amber-300"
                    }`}
                  >
                    {yieldResult}
                  </motion.div>
                )}

                <button
                  id="btn-reset-spectroscopy"
                  onClick={resetSpectroscopy}
                  className="mx-auto flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors font-mono"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Rửa bình cấy khuẩn (Reset)
                </button>
              </div>
            )}


            {/* 3. INDIVIDUAL SIMULATOR COMPONENT: SEQUENCE ALIGNMENT */}
            {currentExp.simulationType === "sequence-alignment" && (
              <div className="space-y-6">
                <div className="text-center mb-1">
                  <h5 className="font-mono text-sm text-blue-400 flex items-center justify-center gap-1.5">
                    <Binary className="w-4 h-4" /> Thuật toán Smith-Waterman Căn hàng Gen di truyền
                  </h5>
                  <p className="text-xs text-slate-500 mt-1">So sánh thực nghiệm chuỗi gien HL-PET1 giải trình tự với ngân hàng gen NCBI.</p>
                </div>

                {/* Input forms seq A / B */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-mono text-slate-500 tracking-wider">Chuỗi Tham Chiếu (Reference DNA seq):</label>
                    <input
                      id="input-sequence-a"
                      type="text"
                      value={seqA}
                      onChange={(e) => {
                        const val = e.target.value.toUpperCase();
                        setSeqA(val);
                        runAlignment(val, seqB);
                      }}
                      className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 font-mono text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition-colors uppercase tracking-widest"
                      maxLength={25}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-mono text-slate-500 tracking-wider">Chuỗi Thực Nghiệm (Lab Sequenced seq):</label>
                    <input
                      id="input-sequence-b"
                      type="text"
                      value={seqB}
                      onChange={(e) => {
                        const val = e.target.value.toUpperCase();
                        setSeqB(val);
                        runAlignment(seqA, val);
                      }}
                      className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 font-mono text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition-colors uppercase tracking-widest"
                      maxLength={25}
                    />
                  </div>
                </div>

                {/* Alignment Display Grid */}
                {alignment && (
                  <div className="bg-slate-950 rounded-2xl border border-slate-800 p-4 space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-950">
                      <span className="text-[10px] font-mono text-slate-400 uppercase">Interactive Sequence Aligner</span>
                      <div className="flex gap-3">
                        <span className="text-[10px] font-mono text-blue-400 font-bold">🎯 Trùng lặp: {alignment.identityPct}%</span>
                        <span className="text-[10px] font-mono text-sky-400 font-bold">📈 Alignment Score: {alignment.score}</span>
                      </div>
                    </div>

                    {/* Alignment blocks visual */}
                    <div className="py-2 overflow-x-auto">
                      <div className="flex flex-col font-mono text-base tracking-widest min-w-[280px]">
                        
                        {/* Sequence A ROW */}
                        <div className="flex items-center gap-1 text-slate-400">
                          <span className="text-[9px] w-14 text-slate-500 font-mono select-none">Seq_A_Ref:</span>
                          <div className="flex">
                            {alignment.matchString.split("").map((char, idx) => {
                              const isMatch = char === alignment.comparison[idx];
                              return (
                                <span 
                                  key={idx} 
                                  className={`w-4 h-6 flex items-center justify-center rounded text-sm font-bold ${
                                    isMatch ? "bg-blue-550/10 text-blue-400" : "bg-red-500/20 text-red-400"
                                  }`}
                                >
                                  {char}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        {/* Connection indicators row */}
                        <div className="flex items-center gap-1 my-0.5">
                          <span className="w-14 select-none" />
                          <div className="flex">
                            {alignment.matchString.split("").map((char, idx) => {
                              const isMatch = char === alignment.comparison[idx];
                              return (
                                <span 
                                  key={idx} 
                                  className={`w-4 flex justify-center text-[10px] transition-colors font-bold ${
                                    isMatch ? "text-blue-500" : "text-red-500"
                                  }`}
                                >
                                  {isMatch ? "|" : "."}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        {/* Sequence B ROW */}
                        <div className="flex items-center gap-1 text-white">
                          <span className="text-[9px] w-14 text-slate-500 font-mono select-none">Seq_B_Lab:</span>
                          <div className="flex text-white">
                            {alignment.comparison.split("").map((char, idx) => {
                              const isMatch = char === alignment.matchString[idx];
                              return (
                                <span 
                                  key={idx} 
                                  className={`w-4 h-6 flex items-center justify-center rounded text-sm font-bold ${
                                    isMatch ? "bg-blue-550/10 text-blue-300" : "bg-red-500/20 text-red-300"
                                  }`}
                                >
                                  {char}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Detected Mutations Summary */}
                    <div className="text-[11px] font-mono text-slate-400 border-t border-slate-900 pt-3">
                      <div className="text-slate-500 flex items-center gap-1 mb-1.5">
                        <Info className="w-3.5 h-3.5 text-blue-400" /> Báo cáo biến động cấu trúc nucleotide:
                      </div>
                      {alignment.mutations.length === 0 ? (
                        <div className="text-blue-400 font-bold">✓ Không phát hiện đột biến. Chuỗi khớp 100% với gen đối chứng hoang dại (Wild type).</div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 max-h-24 overflow-y-auto pr-1">
                          {alignment.mutations.map((mut, i) => (
                            <div key={i} className="bg-slate-900 px-2 py-1 rounded text-red-400 border border-slate-850/80">
                              Locus #{mut.pos}: {mut.ref} ➜ {mut.alt} ({mut.type})
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-center gap-3">
                  <button
                    id="btn-preset-wildtype"
                    onClick={() => {
                      const wild = "ATGGGCTTCCTGGGCACCGTG";
                      setSeqA(wild);
                      setSeqB(wild);
                      runAlignment(wild, wild);
                    }}
                    className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 px-3 rounded-lg font-mono font-medium transition-colors"
                  >
                    Reset Chuỗi Hoang Dại (Khớp 100%)
                  </button>
                  
                  <button
                    id="btn-preset-mutation"
                    onClick={() => {
                      const ref = "ATGGGCTTCCTGGGCACCGTG";
                      const lab = "ATGGGCTTCATGGCCACCGTG"; // Substitution at pos 10, 13
                      setSeqA(ref);
                      setSeqB(lab);
                      runAlignment(ref, lab);
                    }}
                    className="text-xs bg-red-950 hover:bg-red-900/60 text-red-300 border border-red-900/40 py-1.5 px-3 rounded-lg font-mono font-medium transition-colors"
                  >
                    Tạo mô phỏng Đột Biến Điểm
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Footer of the simulator */}
          <div className="mt-6 pt-4 border-t border-slate-800 text-[10px] font-mono text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
            <span>Terminal: bio@hust-computational-node-402</span>
            <span>Mô phỏng dữ liệu thực nghiệm • {profileData.name}</span>
          </div>

        </div>
      </div>
    </div>
  );
}
