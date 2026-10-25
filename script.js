/* ========================================================
   BÁC SĨ VẬT LIỆU POLYMER - CẤP CỨU CA BỆNH KEO DÁN
   Front-end Game Logic, Physical Testing Simulations & Audio
   100% Chemistry Accurate & Presentation Ready
   ======================================================== */

const CLINIC_CASES = [
  {
    id: 1,
    title: "Bệnh án số 1: Xe đạp của bác bảo vệ",
    urgency: "🚨 CẤP CỨU GẤP",
    symptom: "Xe đạp của bác bảo vệ bị thủng đinh 2mm, cần loại keo bịt kín khí và co giãn theo cao su.",
    correctGlue: "sam",
    win: {
      title: "VÁ SĂM KÍN KHÍ THÀNH CÔNG 100%!",
      explanation: "<strong>Bác sĩ kê đơn hoàn toàn chính xác!</strong> Nhựa vá săm chứa polymer tương thích với cao su hòa tan trong dung môi hữu cơ bay hơi nhanh. Khi phết lên săm xe đạp, dung môi bay hơi để lại màng cao su mềm dẻo, co giãn đàn hồi theo săm khi bơm căng mà không bị nứt toác, giữ kín áp suất khí 100%!"
    },
    lose: {
      uf: {
        title: "THẤT BẠI: KEO UF QUÁ GIÒN CỨNG!",
        explanation: "<strong>Sai lầm nghiêm trọng!</strong> Keo Poly(urea-formaldehyde) (keo UF) đóng rắn tạo mạng lưới nhiệt rắn rất cứng và giòn. Khi săm xe đạp được bơm căng hoặc bị đinh đè lên, màng keo UF bị vỡ vụn ngay lập tức, săm xì hết hơi!"
      },
      epoxy: {
        title: "THẤT BẠI: KEO EPOXY KHÔNG CO GIÃN ĐÀN HỒI!",
        explanation: "<strong>Không thích hợp!</strong> Keo Epoxy sau khi đóng rắn tạo mạng 3D siêu cứng chịu lực nén kéo lớn nhưng hầu như không có độ đàn hồi cao su. Khi săm xe bơm căng phồng, mối dán Epoxy sẽ bị bong tách và nứt toác khỏi cao su!"
      }
    }
  },
  {
    id: 2,
    title: "Bệnh án số 2: Đơn đặt hàng 500 bàn học gỗ MDF",
    urgency: "⚙️ ĐƠN HÀNG CÔNG NGHIỆP",
    symptom: "Xưởng mộc muốn đóng 500 cái bàn học từ dăm gỗ và sợi MDF giá rẻ trong nhà.",
    correctGlue: "uf",
    win: {
      title: "KẾT DÍNH DĂM GỖ MDF HOÀN HẢO!",
      explanation: "<strong>Kỹ sư vật liệu xuất sắc!</strong> Keo Poly(urea-formaldehyde) (Keo UF) thuộc nhóm aminoplast, là chất kết dính số 1 của ngành ván dăm và MDF. Keo tạo liên kết bền vững với sợi cellulose của gỗ, đường keo sáng màu thẩm mỹ và đặc biệt có giá thành rẻ nhất để sản xuất hàng loạt 500 bàn học kinh tế!"
    },
    lose: {
      sam: {
        title: "THẤT BẠI: NHỰA VÁ SĂM KHÔNG THỂ DÁN DĂM GỖ!",
        explanation: "<strong>Mặt bàn sập tan tành!</strong> Nhựa vá săm là màng cao su dẻo, không thể tạo độ cứng vững cơ học để định hình hàng triệu hạt dăm gỗ. Khi đặt tạ nặng lên, các khối dăm gỗ bung rời rạc và mặt bàn sập gãy ngay lập tức!"
      },
      epoxy: {
        title: "THẤT BẠI KINH TẾ: KEO EPOXY QUÁ ĐẮT ĐỎ!",
        explanation: "<strong>Phá sản phương án kinh doanh!</strong> Dù keo Epoxy bám dính rất tốt, nhưng giá thành nguyên liệu đắt gấp 12–15 lần keo UF. Dùng keo Epoxy để ép 500 cái bàn học giá rẻ sẽ khiến chi phí sản xuất vượt quá mức chịu đựng của xưởng mộc!"
      }
    }
  },
  {
    id: 3,
    title: "Bệnh án số 3: Chế tác mặt bàn trà nghệ thuật River Table",
    urgency: "💎 NGHỆ THUẬT CAO CẤP",
    symptom: "Mặt bàn trà nghệ thuật cần đổ một lớp nhựa trong suốt bóng loáng như pha lê, không thấm nước.",
    correctGlue: "epoxy",
    win: {
      title: "MẶT BÀN PHA LÊ TRONG SUỐT KHÁNG NƯỚC 100%!",
      explanation: "<strong>Tuyệt tác Bác sĩ Vật liệu!</strong> Keo Epoxy (dòng Epoxy Resin trong suốt) khi đóng rắn không bị co ngót thể tích, tạo thành khối nhựa 3D trong veo lấp lánh như pha lê. Bề mặt nhẵn bóng chống thấm nước tuyệt đối, giọt nước rơi xuống tạo hiệu ứng lá sen lăn trượt đi mà không đọng lại!"
    },
    lose: {
      sam: {
        title: "THẤT BẠI THẨM MỸ: NHỰA VÁ SĂM ĐỤC MỜ VÀ DẺO!",
        explanation: "<strong>Hỏng toàn bộ bàn nghệ thuật!</strong> Nhựa vá săm có màu vàng đục, màng mỏng mềm dẻo không thể đổ khối dày, bề mặt nhăn nheo và không thể tạo độ bóng pha lê nghệ thuật!"
      },
      uf: {
        title: "THẢM HỌA: KEO UF BỊ NGẤM NƯỚC MỤC RÃ!",
        explanation: "<strong>Thủy phân rã keo!</strong> Keo Poly(urea-formaldehyde) có khả năng kháng nước và chịu thời tiết cực kỳ kém. Khi nước đổ lên, keo bị phản ứng thủy phân ngược làm rã liên kết, mặt bàn bị mờ đục xám xịt, phồng rộp và bốc mùi formaldehyde độc hại!"
      }
    }
  },
  {
    id: 4,
    title: "Bệnh án số 4: Giày sneaker chạy bộ bị há mõm bung đế",
    urgency: "👟 CHẤN THƯƠNG THỂ THAO",
    symptom: "Đôi giày thể thao chạy bộ bị bong tróc toàn bộ phần mõm đế cao su, cần keo chịu lực uốn gập liên tục hàng ngàn lần khi vận động mạnh.",
    correctGlue: "sam",
    win: {
      title: "ĐẾ GIÀY ĐÀN HỒI UỐN GẬP BỀN BỈ 100%!",
      explanation: "<strong>Bác sĩ kê đơn hoàn hảo!</strong> Đế giày thể thao khi chạy bộ phải uốn gập liên tục ở góc 45°–90°. Nhựa vá săm chứa polymer cao su hòa tan trong dung môi hữu cơ, khi khô tạo thành màng liên kết đàn hồi cao su dẻo dai. Lớp keo uốn lượn nhịp nhàng theo từng bước chạy mà không bao giờ bị nứt gãy cơ học hay bong tróc!"
    },
    lose: {
      uf: {
        title: "THẤT BẠI: KEO UF QUÁ GIÒN CỨNG NỨT VỤN!",
        explanation: "<strong>Đế giày gãy toác ngay bước đầu tiên!</strong> Keo Poly(urea-formaldehyde) đóng rắn tạo mạng lưới nhiệt rắn rất giòn cứng, không có khả năng co giãn. Khi vận động viên gập bàn chân, đường keo UF bị nứt toác 'Rắc rắc' ngay tức khắc và bung rời đế giày!"
      },
      epoxy: {
        title: "THẤT BẠI: KEO EPOXY BỊ TÁCH LỚP DO THIẾU ĐỘ DẺO!",
        explanation: "<strong>Bong tróc sau vài bước chạy!</strong> Keo Epoxy chịu lực nén kéo rất tốt nhưng mô-đun đàn hồi kém (cứng như đá). Khi đế giày cao su mềm liên tục biến dạng uốn cong, ứng suất cắt tập trung tại bề mặt làm keo Epoxy bị tách lớp (delamination) và rụng rời!"
      }
    }
  },
  {
    id: 5,
    title: "Bệnh án số 5: Thi công 100 vách tiêu âm hội trường",
    urgency: "🏛️ DỰ ÁN TRƯỜNG HỌC",
    symptom: "Đội thầu cần ép 100 tấm ván dăm tiêu âm chống ồn diện tích lớn trong nhà với ngân sách trường học vô cùng tiết kiệm.",
    correctGlue: "uf",
    win: {
      title: "VÁCH TIÊU ÂM BỀN CHẮC & SIÊU TIẾT KIỆM KINH TẾ!",
      explanation: "<strong>Kỹ sư vật liệu tính toán kinh tế tuyệt vời!</strong> Keo Poly(urea-formaldehyde) (Keo UF) là chất kết dính số 1 của ngành ván dăm và vách ngăn nội thất trong nhà. Keo tạo liên kết hydro và bám dính cơ học cực mạnh với xơ sợi cellulose của dăm gỗ, đóng rắn nhanh khi ép nhiệt, và quan trọng nhất: giá thành rẻ nhất thị trường giúp dự án trường học hoàn thành đúng tiến độ mà không vượt ngân sách!"
    },
    lose: {
      sam: {
        title: "THẤT BẠI: NHỰA VÁ SĂM KHIẾN VÁCH ÉP MỀM OẶT!",
        explanation: "<strong>Tấm ván ép nhão nhoét biến dạng!</strong> Nhựa vá săm là màng cao su dẻo phân tán, không thể tạo độ cứng vững cơ học để định hình hàng triệu mẩu dăm gỗ ép diện tích lớn. Vách tiêu âm sẽ bị xệ xuống, nhăn nhúm và không thể bắt vít!"
      },
      epoxy: {
        title: "THẤT BẠI: CẠN KIỆT 100% NGÂN SÁCH TRƯỜNG HỌC!",
        explanation: "<strong>Chi phí keo đắt gấp 15 lần!</strong> Keo Epoxy có thể kết dính tốt, nhưng giá thành nguyên liệu đắt gấp 12–15 lần keo UF. Với diện tích hàng trăm mét vuông ván ép, chi phí dùng Epoxy sẽ làm phá sản dự án của trường học!"
      }
    }
  },
  {
    id: 6,
    title: "Bệnh án số 6: Cứu chữa quai bình gốm sứ cổ truyền thống",
    urgency: "🏺 DI VẬT QUÝ GIÁ",
    symptom: "Quai bình hoa gốm men cổ bị gãy rời quai cầm, cần loại keo bám dính cực mạnh lên bề mặt vô cơ bóng loáng, chịu lực nhấc nặng 10KG và không co ngót.",
    correctGlue: "epoxy",
    win: {
      title: "PHỤC CHẾ CỔ VẬT HOÀN HẢO • CHỊU LỰC GIẰNG KÉO SIÊU CẤP!",
      explanation: "<strong>Tay nghề phục chế đỉnh cao!</strong> Keo Epoxy (Keo AB) chứa các nhóm epoxy phân cực và liên kết cộng hóa trị mạng 3D nhiệt rắn, bám dính siêu đẳng lên bề mặt vô cơ trơn nhẵn của gốm men, thủy tinh và kim loại. Quá trình đóng rắn không bay hơi dung môi nên không co ngót thể tích, chịu lực giằng kéo trên 20 MPa, xách bình hoa 10KG an toàn tuyệt đối!"
    },
    lose: {
      sam: {
        title: "THẤT BẠI: BÌNH CỔ TRƯỢT TUỘT RƠI TAN TÀNH!",
        explanation: "<strong>Bình cổ rơi vỡ tan nát!</strong> Nhựa vá săm là chất không phân cực, không thể bám dính lên bề mặt men gốm vô cơ trơn bóng. Vừa xách quai lên, mối dán cao su trượt tuột và bình cổ rơi xuống sàn vỡ tan tành!"
      },
      uf: {
        title: "THẤT BẠI: KEO UF KHÔNG BÁM DÍNH TRÊN GỐM SỨ!",
        explanation: "<strong>Quai nứt rời rơi tự do!</strong> Keo UF chỉ bám tốt trên nhóm hydroxyl của cellulose (gỗ). Trên bề mặt men gốm vô cơ trơ, keo UF không thể bám dính, cộng thêm hiện tượng co ngót khi đóng rắn làm quai tách rời ngay lập tức!"
      }
    }
  },
  {
    id: 7,
    title: "Bệnh án số 7: Xuồng hơi cao su cứu hộ bị rách 3cm",
    urgency: "🌊 CỨU NẠN KHẨN CẤP",
    symptom: "Xuồng phao cao su của đội cứu hộ mùa lũ bị rách một đường 3cm, cần dán kín khí khẩn cấp để bơm căng áp suất 0.5 bar thả sông cứu người.",
    correctGlue: "sam",
    win: {
      title: "VÁ XUỒNG KÍN NƯỚC KÍN KHÍ • CỨU HỘ THÀNH CÔNG 100%!",
      explanation: "<strong>Bác sĩ cứu sinh xuất sắc!</strong> Vỏ xuồng hơi được chế tạo từ cao su tổng hợp. Nhựa vá săm chứa polymer cao su hòa tan trong dung môi bay hơi, khi áp lên bề mặt sẽ tạo liên kết 'hàn lạnh' hòa tan đồng bản chất với vỏ xuồng. Khi bơm căng 0.5 bar và thả sông, miếng vá co giãn cùng nhịp với thành xuồng, chống thấm nước và kín khí 100%!"
    },
    lose: {
      uf: {
        title: "THẤT BẠI: KEO UF BỊ NƯỚC LŨ PHÂN HỦY LÀM CHÌM XUỒNG!",
        explanation: "<strong>Thảm họa chìm xuồng cứu nạn!</strong> Keo Poly(urea-formaldehyde) kỵ nước rất nặng, khi ngâm nước sông keo bị thủy phân rã liên kết. Đồng thời tính giòn cứng khiến keo bị bẻ nứt khi sóng đánh, khí xì ồ ạt làm chìm xuồng!"
      },
      epoxy: {
        title: "THẤT BẠI: KEO EPOXY CỨNG ĐƠ BỊ BONG TÁCH KHI BƠM CĂNG!",
        explanation: "<strong>Xì hơi khi bơm áp suất!</strong> Khi bơm khí 0.5 bar, vỏ cao su phồng giãn nở thể tích. Keo Epoxy cứng như đá không thể giãn nở theo vỏ cao su, dẫn đến nứt tách viền miếng dán và hơi xì ra ngoài ngay lập tức!"
      }
    }
  },
  {
    id: 8,
    title: "Bệnh án số 8: Đúc khối hổ phách bảo tồn bọ cánh cứng",
    urgency: "🔬 BẢO TỒN BẢO TÀNG",
    symptom: "Bảo tàng cần đúc một khối polymer trong suốt dày 5cm bọc kín mẫu bọ cánh cứng quý hiếm, yêu cầu trong veo tuyệt đối như thủy tinh và không làm cháy mẫu vật.",
    correctGlue: "epoxy",
    win: {
      title: "KIỆT TÁC PHA LÊ QUANG HỌC • BẢO TỒN VĨNH CỬU!",
      explanation: "<strong>Tuyệt tác Kỹ sư Vật liệu!</strong> Keo Epoxy dòng Resin trong suốt đúc khối đóng rắn êm dịu bằng phản ứng cộng mở vòng amine, không giải phóng nước hay dung môi, độ co ngót thể tích gần như bằng 0 (< 0.5%). Khối nhựa tạo ra trong suốt như pha lê, chiết suất quang học cao, bảo tồn nguyên vẹn màu sắc óng ánh và từng sợi lông của bọ cánh cứng qua hàng trăm năm!"
    },
    lose: {
      sam: {
        title: "THẤT BẠI: KHỐI KEO ĐỤC NGẦU & TEO TÓP LÀM NÁT MẪU BỌ!",
        explanation: "<strong>Hỏng toàn bộ mẫu bảo tàng!</strong> Nhựa vá săm chứa dung môi hữu cơ bay hơi, chỉ quét được màng mỏng. Khi đổ khối dày 5cm, dung môi không thoát ra được tạo bọt sủi tăm đục ngầu, màng keo teo tóp co rúm bóp nát vụn mẫu côn trùng!"
      },
      uf: {
        title: "THẤT BẠI: KEO UF ĐỤC TRẮNG NHƯ VÔI & CHÁY ĐEN MẪU!",
        explanation: "<strong>Mẫu bọ bị hóa than!</strong> Phản ứng trùng ngưng tạo keo UF giải phóng nước và formaldehyde tự do có tính axit, làm cháy xơ hóa và đen sì mẫu sinh học. Hơn nữa, keo UF đóng rắn tạo khối màu trắng đục như sữa vôi, che khuất hoàn toàn mẫu vật bên trong!"
      }
    }
  }
];

/* ========================================================
   GAME CLINIC STATE
   ======================================================== */
let currentCaseIndex = 0;
let isSimulating = false;
let audioEnabled = true;

/* ========================================================
   AUDIO SYSTEM: HTML5 AUDIO + WEB AUDIO API FALLBACK
   ======================================================== */
let audioCtx = null;

function initAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playTickSound() {
  if (!audioEnabled) return;
  const tickAudio = document.getElementById('tickSound');
  if (tickAudio) {
    tickAudio.currentTime = 0;
    tickAudio.play().catch(() => playSyntheticTone(880, 'sine', 0.25, 0.2));
  } else {
    playSyntheticTone(880, 'sine', 0.25, 0.2);
  }
}

function playBoomSound() {
  if (!audioEnabled) return;
  const boomAudio = document.getElementById('boomSound');
  if (boomAudio) {
    boomAudio.currentTime = 0;
    boomAudio.play().catch(() => playSyntheticBoom());
  } else {
    playSyntheticBoom();
  }
}

/* Web Audio API Fallbacks */
function playSyntheticTone(freq, type, duration, gainLevel = 0.15) {
  initAudioContext();
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(gainLevel, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

function playSyntheticBoom() {
  initAudioContext();
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, audioCtx.currentTime + 0.6);
    gain.gain.setValueAtTime(0.35, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.6);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.6);
  } catch (e) {}
}

function toggleAudio() {
  audioEnabled = !audioEnabled;
  document.getElementById('btn-sound-toggle').textContent = audioEnabled ? '🔊' : '🔇';
}

/* ========================================================
   CONTROLLER & RENDER
   ======================================================== */
function startClinicGame() {
  initAudioContext();
  currentCaseIndex = 0;
  isSimulating = false;

  document.getElementById('screen-intro').classList.remove('active');
  document.getElementById('screen-case').classList.add('active');

  loadCaseData(currentCaseIndex);
}

function loadCaseData(index) {
  isSimulating = false;
  const cData = CLINIC_CASES[index];
  if (!cData) {
    showGrandClinicCelebration();
    return;
  }

  // Update HUD
  document.getElementById('hud-case-index').textContent = `CA BỆNH 0${index + 1} / 0${CLINIC_CASES.length}`;
  
  // Update Stepper Pills dynamically
  const container = document.getElementById('hud-stepper-container');
  if (container) {
    const shortNames = [
      "1. Săm xe", "2. Bàn MDF", "3. Bàn trà", "4. Giày chạy",
      "5. Vách ép", "6. Bình sứ", "7. Xuồng hơi", "8. Hổ phách"
    ];
    container.innerHTML = CLINIC_CASES.map((_, idx) => {
      let sClass = '';
      if (idx < index) sClass = 'passed';
      else if (idx === index) sClass = 'active';
      return `<div class="step-pill ${sClass}" id="step-pill-${idx}">${shortNames[idx] || ('Ca ' + (idx + 1))}</div>`;
    }).join('');
  }

  // Update Case Dossier Info
  document.getElementById('case-patient-title').textContent = cData.title;
  document.getElementById('case-urgency-tag').textContent = cData.urgency;
  document.getElementById('case-symptom-desc').textContent = `"${cData.symptom}"`;

  // Reset View: Show case info banner and adhesive selection grid, hide simulation theater
  document.getElementById('case-info-box').style.display = 'flex';
  document.getElementById('adhesive-selection-grid').style.display = 'grid';
  document.getElementById('simulation-theater').style.display = 'none';

  // Close any open modals
  document.getElementById('modal-win').classList.remove('active');
  document.getElementById('modal-lose').classList.remove('active');
}

/* ========================================================
   PHYSICAL TESTING ANIMATIONS SIMULATION (5.5s MULTI-STAGE)
   Realistic Laboratory Telemetry, Slow-Mo Physics & Sound FX
   ======================================================== */
let simTimerInterval = null;

function prescribeAdhesive(selectedGlue) {
  if (isSimulating) return;
  isSimulating = true;
  initAudioContext();

  const cData = CLINIC_CASES[currentCaseIndex];
  const isCorrect = (selectedGlue === cData.correctGlue);

  // Glue display names
  const glueNames = {
    sam: "Nhựa Vá Săm",
    uf: "Keo Poly(urea-formaldehyde)",
    epoxy: "Keo Epoxy (Keo AB)"
  };

  // Hide selection cards and info banner, show full simulation theater
  document.getElementById('case-info-box').style.display = 'none';
  document.getElementById('adhesive-selection-grid').style.display = 'none';
  const theater = document.getElementById('simulation-theater');
  theater.style.display = 'flex';

  document.getElementById('sim-selected-glue-tag').textContent = `KEO ĐÃ CHỌN: ${glueNames[selectedGlue] || selectedGlue}`;

  // Reset Progress Bar (2.0 seconds)
  const pBar = document.getElementById('sim-progress-bar');
  pBar.style.transition = 'none';
  pBar.style.width = '0%';
  setTimeout(() => {
    pBar.style.transition = 'width 2s linear';
    pBar.style.width = '100%';
  }, 50);

  // Render specific interactive simulation scene
  renderSimulationScene(currentCaseIndex + 1, selectedGlue, isCorrect);

  // Phase 1 (0.0s): Startup
  updateSimPhase(1, "⚡ GIAI ĐOẠN 1: THIẾT LẬP MẪU VẬT LIỆU & GIA TẢI ÁP LỰC BAN ĐẦU...");
  playSyntheticTone(120, 'sawtooth', 0.6, 0.08);

  // Start real-time telemetry HUD clock & sensor meters (2.0s)
  startTelemetryMeters(currentCaseIndex + 1, selectedGlue, isCorrect);

  // Phase 2 (0.65s): Extreme Load Impact
  setTimeout(() => {
    updateSimPhase(2, "💥 GIAI ĐOẠN 2: TÁC ĐỘNG TẢI TRỌNG CỰC HẠN & ĐO BIẾN DẠNG KẾT CẤU...");
    playSyntheticTone(70, 'triangle', 0.4, 0.28);
    if (!isCorrect && (currentCaseIndex === 0 || currentCaseIndex === 6)) {
      setTimeout(() => playSyntheticTone(320, 'sawtooth', 0.5, 0.12), 200); // Air hiss
    }
  }, 650);

  // Phase 3 (1.35s): Optical / Microscopic Analysis
  setTimeout(() => {
    updateSimPhase(3, "🔬 GIAI ĐOẠN 3: PHÂN TÍCH QUANG HỌC HIỂN VI & ĐÁNH GIÁ ĐỘ BỀN LIÊN KẾT...");
    playSyntheticTone(580, 'sine', 0.3, 0.12);
  }, 1350);

  // Punchy testing completes at 2.0s
  setTimeout(() => {
    clearInterval(simTimerInterval);
    finishSimulation(isCorrect, selectedGlue, cData);
  }, 2000);
}

function updateSimPhase(phaseNum, text) {
  const banner = document.getElementById('sim-phase-text');
  if (banner) banner.textContent = text;
}

function startTelemetryMeters(caseNum, selectedGlue, isCorrect) {
  clearInterval(simTimerInterval);
  const startTime = Date.now();
  const duration = 2000;

  const timerEl = document.getElementById('telemetry-timer');
  const pressureEl = document.getElementById('telemetry-pressure');
  const strainEl = document.getElementById('telemetry-strain');

  simTimerInterval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(1, elapsed / duration);

    // Format mm:ss.ms
    const totalSecs = (elapsed / 1000).toFixed(2);
    const secs = Math.floor(totalSecs);
    const ms = Math.floor((totalSecs - secs) * 100);
    if (timerEl) {
      timerEl.textContent = `00:${secs < 10 ? '0' + secs : secs}.${ms < 10 ? '0' + ms : ms}`;
    }

    if (caseNum === 1) {
      // Pressure for tire: 0.00 -> 0.45 MPa, stays or drops to 0.00
      let pVal = progress < 0.3 ? (progress * 1.5).toFixed(2) : (0.45).toFixed(2);
      if (!isCorrect && progress >= 0.35) {
        pVal = Math.max(0, 0.45 - (progress - 0.35) * 1.8).toFixed(2);
      }
      if (pressureEl) pressureEl.textContent = `${pVal} MPa`;
      if (strainEl) strainEl.textContent = isCorrect ? `${(progress * 18).toFixed(1)}% (ĐÀN HỒI)` : `${(progress * 85).toFixed(1)}% (RÁCH VỠ)`;

    } else if (caseNum === 2) {
      // Pressure for MDF: 0 -> 15.8 MPa
      let pVal = (progress * 15.8).toFixed(2);
      if (pressureEl) pressureEl.textContent = `${pVal} MPa`;
      if (strainEl) strainEl.textContent = isCorrect ? "CHỊU LỰC 100%" : (progress >= 0.35 ? "GÃY SẬP 0%" : "ĐANG NÉN...");

    } else if (caseNum === 3) {
      // Moisture barrier: 0 -> 100% moisture
      let mVal = (progress * 100).toFixed(1);
      if (pressureEl) pressureEl.textContent = `ẨM: ${mVal}%`;
      if (strainEl) strainEl.textContent = isCorrect ? "THẤM: 0.0% (PHA LÊ)" : (progress >= 0.35 ? "MỤC RÃ 100%" : "ĐANG XẢ NƯỚC...");

    } else if (caseNum === 4) {
      // Sneaker flex test: 0 -> 90 deg
      let deg = Math.floor(progress * 90);
      if (pressureEl) pressureEl.textContent = `UỐN: ${deg}° (1000 CHU KỲ)`;
      if (strainEl) strainEl.textContent = isCorrect ? "ĐÀN HỒI: 100% (DẺO DAI)" : (progress >= 0.35 ? "NỨT TOÁC (BUNG ĐẾ)" : "ĐANG BẺ GẬP...");

    } else if (caseNum === 5) {
      // Plywood hydraulic press: 0 -> 25 tons
      let tons = (progress * 25.5).toFixed(1);
      if (pressureEl) pressureEl.textContent = `ÉP: ${tons} TẤN`;
      if (strainEl) strainEl.textContent = isCorrect ? "LIÊN KẾT: 100% (SIÊU RẺ)" : (selectedGlue === 'epoxy' ? "QUỸ: VƯỢT +1500% GIÁ" : "MỀM OẶT 0% (HỎNG)");

    } else if (caseNum === 6) {
      // Ceramic pull test: 0 -> 220 N
      let nVal = Math.floor(progress * 220);
      if (pressureEl) pressureEl.textContent = `TẢI TRỌNG: ${nVal} N (~22KG)`;
      if (strainEl) strainEl.textContent = isCorrect ? "BÁM VÔ CƠ: SIÊU BỀN" : (progress >= 0.35 ? "TUỘT RƠI (VỠ BÌNH)" : "ĐANG KÉO GIẰNG...");

    } else if (caseNum === 7) {
      // Raft water pressure: 0 -> 0.50 bar
      let barVal = (progress * 0.50).toFixed(2);
      if (pressureEl) pressureEl.textContent = `KHÍ NÉN: ${barVal} bar`;
      if (strainEl) strainEl.textContent = isCorrect ? "KÍN KHÍ: 100% (PHAO CĂNG)" : (progress >= 0.35 ? "SỦI BỌT XÌ HƠI (CHÌM)" : "ĐANG BƠM ÁP LỰC...");

    } else if (caseNum === 8) {
      // Amber optical scan: 0 -> 99.8% transparency
      let optVal = (progress * 99.8).toFixed(1);
      if (pressureEl) pressureEl.textContent = `QUANG HỌC: ${optVal}%`;
      if (strainEl) strainEl.textContent = isCorrect ? "CO NGÓT: 0.1% (HOÀN HẢO)" : (selectedGlue === 'uf' ? "CHÁY ĐEN MẪU BỌ" : "SỦI BỌT CO RÚM");
    }

    if (progress >= 1) clearInterval(simTimerInterval);
  }, 40);
}

function renderSimulationScene(caseNum, selectedGlue, isCorrect) {
  const viewport = document.getElementById('sim-viewport');
  viewport.innerHTML = '';

  if (caseNum === 1) {
    // --- CA BỆNH 1: SĂM XE ĐẠP (ĐINH ĐÂM 5.5s) ---
    viewport.innerHTML = `
      <div class="sim-laser-scanline"></div>
      <div class="sim-scene-tire">
        <div class="sharp-nail-model ${isCorrect ? 'strike-bounce' : 'strike-pierce'}" id="sim-nail"></div>
        <div class="tire-tube-model ${!isCorrect ? 'deflate' : ''}" id="sim-tire">
          <div class="tire-treads"></div>
          <div class="tire-patch-model ${isCorrect ? 'elastic-bounce' : 'shatter'}" id="sim-patch"></div>
        </div>
        ${!isCorrect ? '<div class="sim-leak-air">Phìiii... 💨 XÌ HƠI HOÀN TOÀN!</div>' : ''}
      </div>
    `;
  } else if (caseNum === 2) {
    // --- CA BỆNH 2: BÀN GỖ DĂM MDF (TẠ ĐẬP 5.5s) ---
    viewport.innerHTML = `
      <div class="sim-laser-scanline"></div>
      <div class="sim-scene-mdf">
        <div class="heavy-weight-model drop-hammer">
          <span>100 KG</span>
          <span class="weight-sub">TẢI TRỌNG NÉN</span>
        </div>
        <div class="mdf-table-model ${!isCorrect ? 'break-collapse' : ''}">
          <div class="mdf-glue-joint"></div>
        </div>
        <div class="mdf-support-leg leg-left"></div>
        <div class="mdf-support-leg leg-right"></div>
      </div>
    `;
  } else if (caseNum === 3) {
    // --- CA BỆNH 3: BÀN TRÀ NGHỆ THUẬT (ĐỔ NƯỚC 5.5s) ---
    viewport.innerHTML = `
      <div class="sim-laser-scanline"></div>
      <div class="sim-scene-resin">
        <div class="water-pour-stream"></div>
        <div class="resin-table-model ${isCorrect ? 'crystal-clean' : 'blister-peel'}">
          ${isCorrect ? '<div class="water-bead-lotus slide-off"></div>' : ''}
        </div>
      </div>
    `;
  } else if (caseNum === 4) {
    // --- CA BỆNH 4: GIÀY SNEAKER (BẺ GẬP 90° 5.5s) ---
    viewport.innerHTML = `
      <div class="sim-laser-scanline"></div>
      <div class="sim-scene-shoe">
        <div class="shoe-tester-clamp"></div>
        <div class="shoe-model ${isCorrect ? 'bend-flex' : 'bend-snap'}">
          <div class="shoe-upper">👟 SNEAKER CHẠY BỘ</div>
          <div class="shoe-sole-joint ${isCorrect ? 'joint-good' : 'joint-broken'}"></div>
          <div class="shoe-outsole"></div>
        </div>
        ${!isCorrect ? '<div class="sim-snap-label">RẮC RẮC! BUNG ĐẾ HOÀN TOÀN!</div>' : ''}
      </div>
    `;
  } else if (caseNum === 5) {
    // --- CA BỆNH 5: VÁN TIÊU ÂM (MÁY ÉP THỦY LỰC 25 TẤN 5.5s) ---
    viewport.innerHTML = `
      <div class="sim-laser-scanline"></div>
      <div class="sim-scene-press">
        <div class="press-ram-head down-stroke">
          <span>PISTON 25 TẤN</span>
        </div>
        <div class="wood-chip-board ${isCorrect ? 'board-solid' : 'board-crumble'}">
          <div class="chip-pattern"></div>
        </div>
        <div class="press-bed-base"></div>
        ${!isCorrect ? `<div class="sim-press-alert">${selectedGlue === 'epoxy' ? '🚨 PHÁ SẢN: KEO QUÁ ĐẮT!' : '⚠️ MỀM OẶT: KHÔNG THỂ BẮT VÍT!'}</div>` : ''}
      </div>
    `;
  } else if (caseNum === 6) {
    // --- CA BỆNH 6: QUAI BÌNH GỐM SỨ (KÉO GIẰNG TẢI TRỌNG 10KG 5.5s) ---
    viewport.innerHTML = `
      <div class="sim-laser-scanline"></div>
      <div class="sim-scene-ceramic">
        <div class="vase-body-model">
          <div class="vase-neck"></div>
          <div class="vase-belly">🏺 BÌNH CỔ</div>
          <div class="vase-handle-model ${isCorrect ? 'handle-bonded' : 'handle-snapped'}">
            <div class="weight-hang-hook">
              <span class="hang-tag">10 KG</span>
            </div>
          </div>
        </div>
        ${!isCorrect ? '<div class="sim-crash-label">💥 QUAI TUỘT RƠI VỠ TAN TÀNH!</div>' : ''}
      </div>
    `;
  } else if (caseNum === 7) {
    // --- CA BỆNH 7: XUỒNG HƠI CAO SU (BƠM KHÍ NGÂM NƯỚC 5.5s) ---
    viewport.innerHTML = `
      <div class="sim-laser-scanline"></div>
      <div class="sim-scene-raft">
        <div class="water-tank-ambient">
          <div class="water-surface-line"></div>
        </div>
        <div class="raft-tube-model ${isCorrect ? 'raft-inflated' : 'raft-leak'}">
          <span class="raft-label">🛟 XUỒNG CỨU HỘ</span>
          <div class="raft-patch-model ${isCorrect ? 'patch-sealed' : 'patch-failed'}"></div>
          ${!isCorrect ? '<div class="air-bubbles-cluster"><span>🫧</span><span>🫧</span><span>🫧</span></div>' : ''}
        </div>
        ${!isCorrect ? '<div class="sim-raft-alert">🌊 XÌ HƠI DƯỚI NƯỚC • CHÌM XUỒNG!</div>' : ''}
      </div>
    `;
  } else if (caseNum === 8) {
    // --- CA BỆNH 8: HỔ PHÁCH BỌ CÁNH CỨNG (QUANG HỌC LASER 5.5s) ---
    viewport.innerHTML = `
      <div class="sim-laser-scanline"></div>
      <div class="sim-scene-amber">
        <div class="laser-emitter-lens"></div>
        <div class="laser-beam-line"></div>
        <div class="amber-cube-block ${isCorrect ? 'crystal-amber' : (selectedGlue === 'uf' ? 'chalk-cloud' : 'shrink-brown')}">
          <div class="fossil-insect-beetle">🪲</div>
          <div class="amber-refraction-shine"></div>
        </div>
        <div class="laser-sensor-target">
          <span class="sensor-value">${isCorrect ? '99.8%' : '0.0%'}</span>
        </div>
        ${!isCorrect ? `<div class="sim-amber-alert">${selectedGlue === 'uf' ? '⚠️ ĐỤC TRẮNG NHƯ VÔI & CHÁY MẪU!' : '⚠️ ĐỤC NGẦU & TEO TÓP NÁT MẪU!'}</div>` : ''}
      </div>
    `;
  }
}

/* ========================================================
   FINISH SIMULATION & SHOW RESULT MODAL
   ======================================================== */
function finishSimulation(isCorrect, selectedGlue, cData) {
  isSimulating = false;

  if (isCorrect) {
    // --- WIN (THẮNG) ---
    playTickSound();
    launchConfetti(65);

    document.getElementById('win-title').textContent = cData.win.title;
    document.getElementById('win-explanation').innerHTML = cData.win.explanation;

    const nextBtn = document.getElementById('btn-advance-case');
    if (currentCaseIndex === CLINIC_CASES.length - 1) {
      nextBtn.textContent = "XEM TỔNG KẾT BÁC SĨ VẬT LIỆU BẬC THẦY 🏆";
    } else {
      nextBtn.textContent = `CHUYỂN SANG CA BỆNH ${currentCaseIndex + 2} / 0${CLINIC_CASES.length} ➡️`;
    }

    document.getElementById('modal-win').classList.add('active');

  } else {
    // --- LOSE (THUA) ---
    playBoomSound();

    // Trigger CSS shake
    const loseDialog = document.getElementById('lose-dialog-box');
    loseDialog.classList.remove('lose-dialog');
    void loseDialog.offsetWidth; // trigger reflow
    loseDialog.classList.add('lose-dialog');

    const loseInfo = cData.lose[selectedGlue] || {
      title: "BÀI TEST THẤT BẠI!",
      explanation: "Loại keo bạn chọn không tương thích với bề mặt và điều kiện tải trọng thực tế."
    };

    document.getElementById('lose-title').textContent = loseInfo.title;
    document.getElementById('lose-explanation').innerHTML = loseInfo.explanation;

    document.getElementById('modal-lose').classList.add('active');
  }
}

/* ========================================================
   MODAL NAVIGATION ACTIONS
   ======================================================== */
function advanceNextCase() {
  document.getElementById('modal-win').classList.remove('active');
  currentCaseIndex++;
  if (currentCaseIndex < CLINIC_CASES.length) {
    loadCaseData(currentCaseIndex);
  } else {
    showGrandClinicCelebration();
  }
}

function retryCurrentCase() {
  document.getElementById('modal-lose').classList.remove('active');
  // Reset simulation view and show adhesive cards again
  document.getElementById('case-info-box').style.display = 'flex';
  document.getElementById('adhesive-selection-grid').style.display = 'grid';
  document.getElementById('simulation-theater').style.display = 'none';
  isSimulating = false;
}

function showGrandClinicCelebration() {
  playTickSound();
  launchConfetti(90);
  document.getElementById('modal-grand').classList.add('active');
}

function restartEntireClinic() {
  document.getElementById('modal-grand').classList.remove('active');
  document.getElementById('screen-case').classList.remove('active');
  document.getElementById('screen-intro').classList.add('active');
  currentCaseIndex = 0;
}

/* ========================================================
   KEYBOARD SHORTCUTS FOR PRESENTER (1, 2, 3, Space, Enter)
   ======================================================== */
document.addEventListener('keydown', (e) => {
  const winModalActive = document.getElementById('modal-win').classList.contains('active');
  const loseModalActive = document.getElementById('modal-lose').classList.contains('active');
  const grandModalActive = document.getElementById('modal-grand').classList.contains('active');
  const caseScreenActive = document.getElementById('screen-case').classList.contains('active');

  // Modal Next / Retry Hotkeys
  if (winModalActive) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
      e.preventDefault();
      advanceNextCase();
    }
    return;
  }

  if (loseModalActive) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'r' || e.key === 'R') {
      e.preventDefault();
      retryCurrentCase();
    }
    return;
  }

  if (grandModalActive) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      restartEntireClinic();
    }
    return;
  }

  // Clinic Selection Hotkeys
  if (caseScreenActive && !isSimulating) {
    if (e.key === '1') {
      prescribeAdhesive('sam');
    } else if (e.key === '2') {
      prescribeAdhesive('uf');
    } else if (e.key === '3') {
      prescribeAdhesive('epoxy');
    }
  }
});

/* ========================================================
   CANVAS PARTICLES & CONFETTI
   ======================================================== */
const pCanvas = document.getElementById('ambient-particles');
const pCtx = pCanvas.getContext('2d');
let pWidth, pHeight;
let particles = [];

function resizeParticles() {
  pWidth = pCanvas.width = window.innerWidth;
  pHeight = pCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeParticles);
resizeParticles();

class ChemDust {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * pWidth;
    this.y = Math.random() * pHeight;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = -Math.random() * 0.4 - 0.15;
    this.radius = Math.random() * 2 + 1;
    this.alpha = Math.random() * 0.35 + 0.15;
    this.color = Math.random() > 0.5 ? "6, 182, 212" : "245, 158, 11";
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.y < -10) this.y = pHeight + 10;
    if (this.x < -10) this.x = pWidth + 10;
    if (this.x > pWidth + 10) this.x = -10;
  }
  draw() {
    pCtx.save();
    pCtx.beginPath();
    pCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    pCtx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
    pCtx.shadowBlur = 6;
    pCtx.shadowColor = `rgba(${this.color}, 0.7)`;
    pCtx.fill();
    pCtx.restore();
  }
}

for (let i = 0; i < 35; i++) particles.push(new ChemDust());

function animateParticles() {
  pCtx.clearRect(0, 0, pWidth, pHeight);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* Confetti */
const cCanvas = document.getElementById('confetti-canvas');
const cCtx = cCanvas.getContext('2d');
let confettiPieces = [];
let confettiAnimId = null;

function resizeConfetti() {
  cCanvas.width = window.innerWidth;
  cCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeConfetti);
resizeConfetti();

function launchConfetti(count = 50) {
  const colors = ['#06b6d4', '#38bdf8', '#f59e0b', '#10b981', '#ec4899', '#ffffff'];
  for (let i = 0; i < count; i++) {
    confettiPieces.push({
      x: cCanvas.width * (0.25 + Math.random() * 0.5),
      y: cCanvas.height * 0.4,
      vx: (Math.random() - 0.5) * 14,
      vy: -Math.random() * 12 - 4,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }
  if (!confettiAnimId) animateConfetti();
}

function animateConfetti() {
  cCtx.clearRect(0, 0, cCanvas.width, cCanvas.height);
  for (let i = confettiPieces.length - 1; i >= 0; i--) {
    const p = confettiPieces[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.35;
    p.vx *= 0.98;
    p.rotation += p.vRot;
    p.opacity -= 0.012;

    if (p.opacity <= 0 || p.y > cCanvas.height) {
      confettiPieces.splice(i, 1);
      continue;
    }

    cCtx.save();
    cCtx.globalAlpha = Math.max(0, p.opacity);
    cCtx.translate(p.x, p.y);
    cCtx.rotate((p.rotation * Math.PI) / 180);
    cCtx.fillStyle = p.color;
    cCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
    cCtx.restore();
  }

  if (confettiPieces.length > 0) {
    confettiAnimId = requestAnimationFrame(animateConfetti);
  } else {
    confettiAnimId = null;
  }
}
