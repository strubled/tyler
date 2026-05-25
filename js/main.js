// Lightbox
function openLightbox(el) {
  const src = el.querySelector('img').src;
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});

// File upload UI
const photosInput = document.getElementById('photos');
const fileList = document.getElementById('file-list');
const uploadArea = document.getElementById('upload-area');

if (photosInput) {
  photosInput.addEventListener('change', updateFileList);

  uploadArea.addEventListener('dragover', function(e) {
    e.preventDefault();
    uploadArea.classList.add('dragover');
  });

  uploadArea.addEventListener('dragleave', function() {
    uploadArea.classList.remove('dragover');
  });

  uploadArea.addEventListener('drop', function(e) {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    photosInput.files = e.dataTransfer.files;
    updateFileList();
  });
}

function updateFileList() {
  if (!fileList) return;
  fileList.innerHTML = '';
  Array.from(photosInput.files).forEach(function(file, i) {
    const chip = document.createElement('div');
    chip.className = 'file-chip';
    chip.innerHTML = `<span>${file.name}</span>`;
    fileList.appendChild(chip);
  });
}

// Smooth active nav on scroll (optional enhancement)
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', function() {
  const y = window.scrollY + 90;
  sections.forEach(function(sec) {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    if (y >= top && y < bottom) {
      document.querySelectorAll('header a').forEach(function(a) {
        a.style.opacity = '1';
      });
    }
  });
}, { passive: true });
