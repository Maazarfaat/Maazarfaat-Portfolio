import { useState } from "react";
import {
  FileText,
  Layers,
  Code2,
  CheckCircle,
  Terminal,
  ArrowRight,
} from "lucide-react";
import { Section, SectionHeading } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

const buildLogData = {
  civicRisk: {
    title: "CivicRisk AI",
    tagline: "Predictive Municipal Hazard Escalation System",
    category: "AI & Computer Vision",
    stages: [
      {
        id: "problem",
        step: "01",
        title: "Problem Definition & Root Cause Analysis",
        icon: FileText,
        focus: "Municipal repair backlog and hazard escalation",
        details: [
          "Municipal public works departments receive thousands of unstructured defect complaints without automated urgency ranking.",
          "Small fractures that cost ₹500 to seal evolve into ₹50,000 structural excavation hazards under monsoon rain and vehicle load.",
          "City engineers lacked a system that factored meteorological stress and traffic exposure into defect prioritization.",
        ],
        codeSnippet: `// Problem constraint model
interface DefectFriction {
  defectClass: "pavement_fracture" | "drainage_clog" | "sinkhole_precursor";
  measuredWidthMm: number;
  unaddressedRiskMultiplier: 1.8; // compounded weekly under rainfall
  currentWorkOrderQueue: "FIFO_unprioritized";
}`,
      },
      {
        id: "design",
        step: "02",
        title: "System Design & Multi-Factor Scoring Architecture",
        icon: Layers,
        focus: "Multi-factor composite scoring engine",
        details: [
          "Decoupled pipeline: Client pre-validation -> Image ingestion -> Defect segmentation -> Multi-factor risk engine -> Municipal dispatch.",
          "Formulated transparent composite scoring: Risk = (VisualSeverity × 0.40) + (TrafficExposure × 0.30) + (EnvironmentalStress × 0.30).",
          "Engineered geospatial clustering to bundle adjacent road defect repairs into single contractor dispatches.",
        ],
        codeSnippet: `# Composite Risk Weighting Function
def calculate_escalation_risk(visual_severity, traffic_index, rain_mm):
    w_visual = 0.40
    w_traffic = 0.30
    w_env = 0.30
    
    # Non-linear rain stress multiplier for saturated roadbeds
    env_stress = min(1.0, (rain_mm / 75.0) ** 1.3)
    
    composite_score = (
        (visual_severity * w_visual) +
        (traffic_index * w_traffic) +
        (env_stress * w_env)
    )
    return round(composite_score * 100, 2)`,
      },
      {
        id: "implementation",
        step: "03",
        title: "Implementation & Defect Segmentation Pipeline",
        icon: Code2,
        focus: "OpenCV preprocessing & PyTorch inference",
        details: [
          "Implemented automated contrast enhancement and perspective normalization for citizen cell phone uploads.",
          "Built defect boundary mask detection using OpenCV morphological kernels and contour tracking.",
          "Developed FastAPI asynchronous endpoints with background worker tasks to process uploads without blocking HTTP response times.",
        ],
        codeSnippet: `# Edge preprocessing pipeline
def preprocess_defect_imagery(image_bytes: bytes):
    img = cv2.imdecode(np.frombuffer(image_bytes, np.uint8), cv2.IMREAD_COLOR)
    # Validate sharpness using Laplacian variance
    laplacian_var = cv2.Laplacian(img, cv2.CV_64F).var()
    if laplacian_var < 80.0:
        raise ImageQualityError("Upload too blurry for structural analysis")
    
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    enhanced = clahe.apply(gray)
    return enhanced`,
      },
      {
        id: "validation",
        step: "04",
        title: "Testing & Validation on Urban Defect Datasets",
        icon: CheckCircle,
        focus: "Cross-validation and dispatch simulation",
        details: [
          "Tested against a benchmark set of 300+ annotated urban defect images with diverse road textures and shadow angles.",
          "Validated that critical water-adjacent cracks were correctly elevated to priority 1 dispatch within 250ms inference latency.",
          "Verified department ticket payload formatting compliant with Open311 municipal API standards.",
        ],
        codeSnippet: `// Validation Test Suite Report
Status: PASSED (312/312 samples)
- Average Inference Latency: 184ms
- Blurry Image Rejection Rate: 99.1%
- False Positive Road Shadow Rate: < 4.2%
- Department Route Accuracy: 96.8%`,
      },
    ],
  },
  marksManagement: {
    title: "Internal Marks Management System",
    tagline: "Multi-Tier Enterprise Java Application",
    category: "Software Engineering & Enterprise MVC",
    stages: [
      {
        id: "problem",
        step: "01",
        title: "Problem Definition: Manual Spreadsheets to Audit System",
        icon: FileText,
        focus: "Fragmented grading records and calculation vulnerabilities",
        details: [
          "Faculty across academic departments relied on disjointed Excel sheets for Continuous Internal Evaluation (CIE) and mid-semester exams.",
          "Manual consolidation suffered from missing student roll numbers, formula tampering, lack of audit trails, and zero transactional rollback on system crashes.",
        ],
        codeSnippet: `// Legacy friction:
// - Disparate un-synchronized Excel files
// - No centralized relational constraints
// - Missing faculty access logging
// - High risk of incorrect grade submissions`,
      },
      {
        id: "design",
        step: "02",
        title: "System Design: Classic MVC with Normalized Schema",
        icon: Layers,
        focus: "JSP, Servlets, DAO pattern, and MySQL relational model",
        details: [
          "Architected 3-tier MVC model: Presentation (JSP views), Controller (Java Servlets with session validation), Data Layer (DAO with JDBC Connection Pool).",
          "Designed normalized relational database schema with tables: Faculty, Departments, Sections, Courses, Students, and StudentMarks.",
          "Enforced foreign key constraints and compound unique keys (student_id + course_id + exam_type) to prevent duplicate grade entries.",
        ],
        codeSnippet: `-- Normalized Student Marks Relational Schema
CREATE TABLE student_marks (
  mark_id INT AUTO_INCREMENT PRIMARY KEY,
  student_roll_no VARCHAR(20) NOT NULL,
  course_code VARCHAR(15) NOT NULL,
  section_id INT NOT NULL,
  mid1_score DECIMAL(5,2) CHECK (mid1_score BETWEEN 0 AND 30),
  mid2_score DECIMAL(5,2) CHECK (mid2_score BETWEEN 0 AND 30),
  assignment_score DECIMAL(5,2) CHECK (assignment_score BETWEEN 0 AND 10),
  faculty_id INT NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY unique_grade_entry (student_roll_no, course_code, section_id)
);`,
      },
      {
        id: "implementation",
        step: "03",
        title: "Implementation: Servlets, Range Checking & Persistence",
        icon: Code2,
        focus: "Java Servlet controllers and transactional updates",
        details: [
          "Constructed MarksUpdateServlet to handle batch POST requests from dynamic section grids.",
          "Implemented strict server-side validation rejecting any score outside 0–30 or assignment score outside 0–10.",
          "Utilized JDBC batch updates within a single database transaction with automatic rollback on connection interruption.",
        ],
        codeSnippet: `// Transactional Marks Persistence in Java DAO
public boolean updateSectionMarks(List<StudentMark> marksList) throws SQLException {
    String sql = "UPDATE student_marks SET mid1_score=?, mid2_score=? WHERE student_roll_no=? AND course_code=?";
    try (Connection conn = DataSource.getConnection();
         PreparedStatement ps = conn.prepareStatement(sql)) {
        conn.setAutoCommit(false);
        for (StudentMark mark : marksList) {
            ps.setDouble(1, mark.getMid1Score());
            ps.setDouble(2, mark.getMid2Score());
            ps.setString(3, mark.getRollNo());
            ps.setString(4, mark.getCourseCode());
            ps.addBatch();
        }
        int[] results = ps.executeBatch();
        conn.commit();
        return results.length > 0;
    } catch (SQLException ex) {
        conn.rollback();
        throw ex;
    }
}`,
      },
      {
        id: "validation",
        step: "04",
        title: "Testing & Deployment: Maven Build & Tomcat Verification",
        icon: CheckCircle,
        focus: "Tomcat server deployment and concurrency stress testing",
        details: [
          "Packaged standard enterprise WAR distribution using Apache Maven build automation (mvn clean package).",
          "Deployed to local Apache Tomcat servlet container and verified session retention during simultaneous multi-section loading.",
          "Tested boundary conditions: 0 marks, max marks (30/100), decimal inputs, and unauthorized faculty URL access.",
        ],
        codeSnippet: `[INFO] --- maven-war-plugin:3.3.2:war (default-war) @ marks-mgmt ---
[INFO] Packaging webapp
[INFO] Building war: /target/marks-management-1.0.0.war
[INFO] BUILD SUCCESS
[INFO] -------------------------------------------------------------
[INFO] Total time:  3.412 s
[INFO] Deployed to Tomcat: /webapps/marks-management.war -> Context initialized in 842ms`,
      },
    ],
  },
};

export default function BuildLog() {
  const [selectedProject, setSelectedProject] = useState("civicRisk");
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const activeProject = buildLogData[selectedProject];
  const activeStage = activeProject.stages[activeStageIndex];
  const Icon = activeStage.icon;

  return (
    <Section id="build-log" className="relative">
      <SectionHeading
        eyebrow="Signature Interactive Feature"
        title="The Engineering Build Log"
        lede="Step inside the engineering lifecycle. Explore real problems, architecture schematics, production code implementations, and validation records."
      />

      {/* Project Switcher Tabs */}
      <Reveal>
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <button
            type="button"
            onClick={() => {
              setSelectedProject("civicRisk");
              setActiveStageIndex(0);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedProject === "civicRisk"
                ? "bg-[#15181E] text-white shadow-sm"
                : "border border-[#D9D6CF] bg-white text-[#575550] hover:text-[#15181E] hover:border-[#B8B3A8]"
            }`}
          >
            Case A: CivicRisk AI (CV &amp; Urban AI)
          </button>

          <button
            type="button"
            onClick={() => {
              setSelectedProject("marksManagement");
              setActiveStageIndex(0);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedProject === "marksManagement"
                ? "bg-[#15181E] text-white shadow-sm"
                : "border border-[#D9D6CF] bg-white text-[#575550] hover:text-[#15181E] hover:border-[#B8B3A8]"
            }`}
          >
            Case B: Internal Marks System (Java / Tomcat)
          </button>
        </div>
      </Reveal>

      {/* Main Interactive Stage Explorer */}
      <Reveal delay={60}>
        <div className="rounded-3xl border border-[#D9D6CF] bg-white overflow-hidden shadow-[0_12px_36px_-15px_rgba(21,24,30,0.06)]">
          {/* Header of Active Project */}
          <div className="p-5 sm:p-6 border-b border-[#D9D6CF] bg-[#FAF9F5] flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[0.68rem] font-mono font-bold uppercase tracking-widest text-[#315EFB]">
                {activeProject.category}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#15181E] tracking-tight mt-0.5">
                {activeProject.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white border border-[#D9D6CF] text-xs font-bold text-[#15181E] font-mono">
                Stage 0{activeStageIndex + 1} / 04
              </span>
            </div>
          </div>

          {/* Stepper Navigation Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#D9D6CF] bg-white">
            {activeProject.stages.map((stage, idx) => {
              const StageIcon = stage.icon;
              const isActive = idx === activeStageIndex;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-3.5 sm:p-4 text-left border-r last:border-r-0 border-[#D9D6CF] transition-all flex items-center gap-2.5 ${
                    isActive
                      ? "bg-[#EEF3FF] border-b-2 border-b-[#315EFB]"
                      : "hover:bg-[#FAF9F5] opacity-75 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`p-1.5 rounded-lg shrink-0 ${
                      isActive ? "bg-[#315EFB] text-white" : "bg-[#F7F5EF] text-[#575550]"
                    }`}
                  >
                    <StageIcon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[0.62rem] font-mono font-bold text-[#88857D]">
                      STAGE {stage.step}
                    </span>
                    <span
                      className={`text-xs font-bold line-clamp-1 ${
                        isActive ? "text-[#315EFB]" : "text-[#15181E]"
                      }`}
                    >
                      {stage.title.split(":")[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stage Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr]">
            <div className="p-5 sm:p-7 border-b lg:border-b-0 lg:border-r border-[#D9D6CF] space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#EEF3FF] text-[#315EFB]">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[0.68rem] font-mono font-bold uppercase tracking-wider text-[#315EFB]">
                    STAGE {activeStage.step}
                  </span>
                  <h4 className="font-display text-base sm:text-lg font-bold text-[#15181E] tracking-tight">
                    {activeStage.title}
                  </h4>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#E5E2DA] text-xs font-semibold text-[#15181E]">
                Key Focus: <span className="text-[#315EFB]">{activeStage.focus}</span>
              </div>

              <div className="space-y-2.5">
                {activeStage.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#575550] leading-relaxed">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#D9D6CF] flex items-center justify-between">
                <button
                  type="button"
                  disabled={activeStageIndex === 0}
                  onClick={() => setActiveStageIndex((p) => Math.max(0, p - 1))}
                  className="px-3 py-1 rounded-lg border border-[#D9D6CF] text-xs font-semibold text-[#575550] hover:text-[#15181E] disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  ← Previous
                </button>

                <button
                  type="button"
                  disabled={activeStageIndex === activeProject.stages.length - 1}
                  onClick={() => setActiveStageIndex((p) => Math.min(activeProject.stages.length - 1, p + 1))}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-lg bg-[#15181E] text-xs font-bold text-white hover:bg-[#315EFB] disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  <span>Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-5 sm:p-7 bg-[#15181E] text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-xs font-mono text-stone-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#315EFB]" />
                    <span>verified_artifact.log</span>
                  </div>
                  <span className="text-emerald-400 font-semibold text-[0.7rem]">Validated</span>
                </div>

                <pre className="font-mono text-xs leading-relaxed overflow-x-auto text-stone-200 select-text">
                  <code>{activeStage.codeSnippet}</code>
                </pre>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[0.68rem] font-mono text-stone-400">
                <span>Vardhaman College of Engineering</span>
                <span className="text-stone-300">Mohammed Maaz Arfaat</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
