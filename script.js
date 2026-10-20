// ==================== DỮ LIỆU MẪU LỜI CHÚC 20/10 ====================
const PRESET_WISHES = {
  collective: {
    recipient: 'Gửi những bông hoa rạng rỡ nhất,',
    message:
      'Nhân ngày Phụ nữ Việt Nam 20/10, xin gửi tới bạn cùng toàn thể phái đẹp những lời chúc nồng nhiệt và tốt đẹp nhất. Chúc bạn luôn giữ vững nụ cười rạng rỡ trên môi, trái tim ấm áp yêu thương, ngập tràn hạnh phúc và gặt hái thật nhiều thành công trên mọi hành trình.',
    quote:
      '“Phụ nữ sinh ra là để được yêu thương, nâng niu và tỏa sáng theo cách riêng của chính mình.”',
    sender: 'Với tất cả sự trân quý ♥',
  },
  colleagues: {
    recipient: 'Gửi các chị em đồng nghiệp tuyệt vời,',
    message:
      'Cảm ơn các chị em đã luôn mang đến nguồn năng lượng tích cực, sự duyên dáng và tinh thần tận tâm trong công việc mỗi ngày. Chúc một nửa thế giới của tập thể chúng ta ngày 20/10 thật nhiều niềm vui, trẻ trung, xinh đẹp và vạn sự hanh thông!',
    quote:
      '“Dịu dàng khi cần, bản lĩnh khi muốn — chúc các chị em luôn tỏa sáng rực rỡ nhất!”',
    sender: 'Tập thể anh em đồng nghiệp ♥',
  },
  mother: {
    recipient: 'Gửi Mẹ và những người phụ nữ của gia đình,',
    message:
      'Nhân ngày Phụ nữ Việt Nam 20/10, kính chúc Mẹ luôn dồi dào sức khỏe, tâm an trí sáng và mỗi ngày trôi qua đều tràn ngập tiếng cười bên con cháu. Cảm ơn Mẹ vì cả cuộc đời tần tảo, dịu hiền và yêu thương vô điều kiện.',
    quote:
      '“Nơi ấm áp nhất trên thế gian luôn là vòng tay và nụ cười hiền hậu của Mẹ.”',
    sender: 'Con của Mẹ ♥',
  },
  lover: {
    recipient: 'Gửi người con gái đặc biệt nhất trong tim,',
    message:
      'Chúc mừng ngày 20/10! Cảm ơn em đã đến và làm cho thế giới trở nên dịu dàng, tươi đẹp hơn biết bao. Chúc cô gái của anh luôn rạng rỡ như ánh nắng mùa thu, mỗi ngày đều được yêu thương, chiều chuộng và hạnh phúc trọn vẹn.',
    quote:
      '“Giữa muôn vàn đóa hoa tháng Mười, em vẫn luôn là bông hoa đẹp nhất.”',
    sender: 'Gửi ngàn yêu thương tới em ♥',
  },
};

// Danh sách thẻ lộc bất ngờ khi mở hộp quà 20/10
const SURPRISE_TOKENS = [
  {
    title: 'Thẻ Lộc: Nhan Sắc Rạng Ngời',
    wish: 'Chúc bạn luôn xinh đẹp như hoa tháng Mười, rạng rỡ tự tin và giữ mãi nét thanh xuân tươi trẻ!',
  },
  {
    title: 'Thẻ Lộc: Vạn Sự Hanh Thông',
    wish: 'Chúc mọi dự định, ước mơ và mục tiêu của bạn đều đơm hoa kết trái rực rỡ trong thời gian tới!',
  },
  {
    title: 'Thẻ Lộc: Bình An & Hạnh Phúc',
    wish: 'Chúc tâm hồn bạn luôn nhẹ nhàng, mỗi sớm mai thức dậy đều đón nhận thật nhiều niềm vui và yêu thương!',
  },
  {
    title: 'Thẻ Lộc: Yêu Thương Đong Đầy',
    wish: 'Chúc bạn luôn được bao quanh bởi những người trân trọng, thấu hiểu và nâng niu bạn mỗi ngày!',
  },
  {
    title: 'Thẻ Lộc: Tự Tin Tỏa Sáng',
    wish: 'Hãy luôn tự hào về chính mình — một người phụ nữ độc lập, duyên dáng và đầy cuốn hút!',
  },
];

// ==================== KHỞI TẠO DOM ELEMENTS ====================
const envelopeStage = document.getElementById('envelopeStage');
const cardStage = document.getElementById('cardStage');
const envelopeTrigger = document.getElementById('envelopeTrigger');
const envelope = document.getElementById('envelope');
const btnResetEnvelope = document.getElementById('btnResetEnvelope');
const btnCustomize = document.getElementById('btnCustomize');

const previewRecipient = document.getElementById('previewRecipient');
const cardRecipient = document.getElementById('cardRecipient');
const cardMessage = document.getElementById('cardMessage');
const cardQuote = document.getElementById('cardQuote');
const cardSender = document.getElementById('cardSender');
const presetChips = document.getElementById('presetChips');

const giftBoxTrigger = document.getElementById('giftBoxTrigger');
const giftBoxElement = document.getElementById('giftBoxElement');
const giftSurprise = document.getElementById('giftSurprise');
const surpriseTitle = document.getElementById('surpriseTitle');
const surpriseWish = document.getElementById('surpriseWish');
const btnNextWishToken = document.getElementById('btnNextWishToken');

const customizerModal = document.getElementById('customizerModal');
const btnCloseModal = document.getElementById('btnCloseModal');
const customizerForm = document.getElementById('customizerForm');
const inputRecipient = document.getElementById('inputRecipient');
const inputMessage = document.getElementById('inputMessage');
const inputQuote = document.getElementById('inputQuote');
const inputSender = document.getElementById('inputSender');
const btnCopyShareLink = document.getElementById('btnCopyShareLink');
const copyLinkText = document.getElementById('copyLinkText');

let isEnvelopeOpening = false;
let currentTokenIndex = 0;

// ==================== HIỆU ỨNG CÁNH HOA & LẤP LÁNH (CANVAS) ====================
const canvas = document.getElementById('petalCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const PETAL_COLORS = [
  '#f48fb1',
  '#f06292',
  '#ec407a',
  '#f8bbd0',
  '#e6c687',
  '#ffd54f',
];

function createBurst(originX, originY, count = 42) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2.2 + Math.random() * 6.5;
    const isGoldSparkle = Math.random() < 0.28;
    particles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2.4,
      gravity: 0.08 + Math.random() * 0.05,
      size: isGoldSparkle ? 3 + Math.random() * 3.5 : 6 + Math.random() * 7,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.12,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      alpha: 1,
      decay: 0.008 + Math.random() * 0.009,
      isSparkle: isGoldSparkle,
    });
  }
}

function renderParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += p.gravity;
    p.vx *= 0.99;
    p.rotation += p.rotationSpeed;
    p.alpha -= p.decay;

    if (p.alpha <= 0) {
      particles.splice(i, 1);
      continue;
    }

    ctx.save();
    ctx.globalAlpha = Math.max(0, p.alpha);
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);

    if (p.isSparkle) {
      ctx.fillStyle = '#e6b84c';
      ctx.beginPath();
      ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Vẽ cánh hoa mềm mại
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.bezierCurveTo(
        p.size * 0.9,
        -p.size * 0.5,
        p.size * 0.9,
        p.size * 0.7,
        0,
        p.size
      );
      ctx.bezierCurveTo(
        -p.size * 0.9,
        p.size * 0.7,
        -p.size * 0.9,
        -p.size * 0.5,
        0,
        -p.size
      );
      ctx.fill();
    }
    ctx.restore();
  }

  requestAnimationFrame(renderParticles);
}
requestAnimationFrame(renderParticles);

// ==================== TƯƠNG TÁC MỞ PHONG BÌ 3D ====================
function openEnvelope() {
  if (isEnvelopeOpening) return;
  isEnvelopeOpening = true;

  const rect = envelope.getBoundingClientRect();
  createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 50);

  envelope.classList.add('is-opening');

  setTimeout(() => {
    envelopeStage.classList.add('hidden');
    cardStage.classList.remove('hidden');
    btnResetEnvelope.classList.remove('hidden');
    createBurst(window.innerWidth / 2, window.innerHeight * 0.3, 45);
  }, 850);
}

function resetEnvelope() {
  cardStage.classList.add('hidden');
  btnResetEnvelope.classList.add('hidden');
  envelope.classList.remove('is-opening');
  envelopeStage.classList.remove('hidden');
  isEnvelopeOpening = false;

  // Đặt lại trạng thái hộp quà nếu muốn trải nghiệm lại từ đầu
  giftBoxElement.classList.remove('is-popping');
  giftBoxTrigger.classList.remove('hidden');
  giftSurprise.classList.add('hidden');
}

envelopeTrigger.addEventListener('click', openEnvelope);
envelopeTrigger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openEnvelope();
  }
});

btnResetEnvelope.addEventListener('click', resetEnvelope);

// ==================== TƯƠNG TÁC MỞ HỘP QUÀ BẤT NGỜ ====================
function openGiftBox() {
  if (giftBoxElement.classList.contains('is-popping')) return;

  const rect = giftBoxElement.getBoundingClientRect();
  createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 55);

  giftBoxElement.classList.add('is-popping');

  setTimeout(() => {
    giftBoxTrigger.classList.add('hidden');
    giftSurprise.classList.remove('hidden');
  }, 420);
}

giftBoxTrigger.addEventListener('click', openGiftBox);
giftBoxTrigger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openGiftBox();
  }
});

btnNextWishToken.addEventListener('click', () => {
  currentTokenIndex = (currentTokenIndex + 1) % SURPRISE_TOKENS.length;
  const token = SURPRISE_TOKENS[currentTokenIndex];
  surpriseTitle.textContent = token.title;
  surpriseWish.textContent = token.wish;

  const rect = btnNextWishToken.getBoundingClientRect();
  createBurst(rect.left + rect.width / 2, rect.top, 26);
});

// ==================== CẬP NHẬT NỘI DUNG & CHỌN MẪU ====================
function applyCardData({ recipient, message, quote, sender }) {
  previewRecipient.textContent = recipient;
  cardRecipient.textContent = recipient;
  cardMessage.textContent = message;
  cardQuote.textContent = quote ? (quote.startsWith('“') ? quote : `“${quote}”`) : '';
  cardQuote.style.display = quote ? 'block' : 'none';
  cardSender.textContent = sender || 'Với tất cả sự trân quý ♥';
}

presetChips.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;

  const presetKey = chip.dataset.preset;
  const preset = PRESET_WISHES[presetKey];
  if (!preset) return;

  document.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
  chip.classList.add('active');

  applyCardData(preset);
});

// ==================== MODAL TÙY CHỈNH & CHIA SẺ LINK ====================
function openModal() {
  inputRecipient.value = cardRecipient.textContent.trim();
  inputMessage.value = cardMessage.textContent.trim();
  inputQuote.value = cardQuote.textContent.replace(/^[“"]|[”"]$/g, '').trim();
  inputSender.value = cardSender.textContent.trim();
  customizerModal.classList.remove('hidden');
  inputRecipient.focus();
}

function closeModal() {
  customizerModal.classList.add('hidden');
}

btnCustomize.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
customizerModal.addEventListener('click', (e) => {
  if (e.target === customizerModal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !customizerModal.classList.contains('hidden')) {
    closeModal();
  }
});

customizerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const customData = {
    recipient: inputRecipient.value.trim() || PRESET_WISHES.collective.recipient,
    message: inputMessage.value.trim() || PRESET_WISHES.collective.message,
    quote: inputQuote.value.trim(),
    sender: inputSender.value.trim() || PRESET_WISHES.collective.sender,
  };

  document.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
  applyCardData(customData);
  closeModal();
});

btnCopyShareLink.addEventListener('click', async () => {
  const params = new URLSearchParams();
  if (inputRecipient.value.trim()) params.set('to', inputRecipient.value.trim());
  if (inputMessage.value.trim()) params.set('msg', inputMessage.value.trim());
  if (inputQuote.value.trim()) params.set('quote', inputQuote.value.trim());
  if (inputSender.value.trim()) params.set('from', inputSender.value.trim());

  const shareUrl = `${window.location.origin}${window.location.pathname}?${params.toString()}`;

  try {
    await navigator.clipboard.writeText(shareUrl);
    copyLinkText.textContent = 'Đã sao chép link!';
    setTimeout(() => {
      copyLinkText.textContent = 'Sao chép link gửi tặng';
    }, 2200);
  } catch {
    copyLinkText.textContent = 'Không thể tự sao chép';
  }
});

// Đọc tham số URL nếu người nhận mở từ link được chia sẻ
function loadFromUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const to = params.get('to');
  const msg = params.get('msg');
  const quote = params.get('quote');
  const from = params.get('from');

  if (to || msg || quote || from) {
    document.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
    applyCardData({
      recipient: to || PRESET_WISHES.collective.recipient,
      message: msg || PRESET_WISHES.collective.message,
      quote: quote !== null ? quote : PRESET_WISHES.collective.quote,
      sender: from || PRESET_WISHES.collective.sender,
    });
  }
}

loadFromUrlParams();
