/**
 * BookRenderer.js
 * Genera el HTML editorial y artístico del libro interactivo.
 */

import { bookMetadata, chapters, bookPages, asset } from '../chapters/chaptersData.js';

export class BookRenderer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  render() {
    if (!this.container) return;
    this.container.innerHTML = '';

    // Portada en Cuero Rosa Antiguo / Vino y Oro Rosa
    this.container.appendChild(this.createFrontCover());

    // Páginas interiores
    bookPages.forEach((pageData) => {
      const pageEl = this.createPageElement(pageData);
      this.container.appendChild(pageEl);
    });

    // Contratapa
    this.container.appendChild(this.createBackCover());
  }

  createFrontCover() {
    const div = document.createElement('div');
    div.className = 'page page-cover page-cover-front theme-aleja-cover';
    div.setAttribute('data-density', 'hard');
    div.innerHTML = `
      <div class="cover-antique-bg aleja-cover-bg"></div>
      
      <div class="cover-medallion-content">
        <div class="cover-heart-ring">
          <svg viewBox="0 0 100 100" class="ring-heart-svg">
            <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(224, 122, 95, 0.7)" stroke-width="1.5" stroke-dasharray="4 2"/>
            <path d="M50 30 C40 18, 20 22, 20 40 C20 60, 50 78, 50 78 C50 78, 80 60, 80 40 C80 22, 60 18, 50 30 Z" fill="none" stroke="rgba(224, 122, 95, 0.6)" stroke-width="1.8"/>
          </svg>
        </div>

        <div class="cover-gold-badge aleja-badge">
          <span class="cover-medical-icon">🩺 🤍 🩺</span>
          <h1 class="cover-gold-title aleja-title">${bookMetadata.title}</h1>
          <div class="cover-gold-divider aleja-divider"></div>
          <p class="cover-gold-subtitle">${bookMetadata.subtitle}</p>
          <p class="cover-gold-tagline aleja-tagline">«${bookMetadata.dedication}»</p>
        </div>
        
        <button class="btn-open-book aleja-btn" id="btn-start-book">
          <span>Abrir tomo</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    `;
    return div;
  }

  createBackCover() {
    const div = document.createElement('div');
    div.className = 'page page-cover page-cover-back theme-aleja-cover';
    div.setAttribute('data-density', 'hard');
    div.innerHTML = `
      <div class="cover-antique-bg aleja-cover-bg back"></div>
      <div class="cover-medallion-content back">
        <div class="cover-gold-badge aleja-badge">
          <div class="cover-gold-title" style="font-size: 1.85rem;">${bookMetadata.title}</div>
          <div class="cover-gold-divider aleja-divider"></div>
          <div class="cover-gold-subtitle">${bookMetadata.subtitle}</div>
          <div class="cover-formula-motto">${bookMetadata.dedication ? `«${bookMetadata.dedication}»` : ''}</div>
        </div>
      </div>
    `;
    return div;
  }

  createPageElement(data) {
    const page = document.createElement('div');
    page.className = 'page page-parchment aleja-parchment';
    page.setAttribute('data-page-num', data.pageNumber);

    let innerContent = '';
    switch (data.type) {
      case 'table_of_contents':
        innerContent = this.renderTableOfContents(data);
        break;
      case 'chapter_header':
        innerContent = this.renderChapterHeader(data);
        break;
      case 'upcoming_birthday_slot':
        innerContent = this.renderUpcomingBirthdaySlot(data);
        break;
      case 'illuminated_letter_aleja':
        innerContent = this.renderIlluminatedLetterAleja(data);
        break;
      case 'master_art_showcase':
        innerContent = this.renderMasterArtShowcase(data);
        break;
      case 'holiday_chapter':
        innerContent = this.renderHolidayChapter(data);
        break;
      case 'epilogue_upcoming':
        innerContent = this.renderEpilogueUpcoming(data);
        break;
      default:
        innerContent = `<div class="page-content-padding">Página ${data.pageNumber}</div>`;
    }

    if (data.type === 'illuminated_letter_aleja' || data.type === 'manuscript_folio') {
      page.className = 'page page-parchment page-folio-wrapper';
      page.innerHTML = innerContent;
    } else {
      page.innerHTML = `
        <div class="page-parchment-border aleja-border"></div>
        <div class="page-inner-scroll">
          ${innerContent}
        </div>
        <div class="page-footer-number">— ${data.pageNumber} —</div>
      `;
    }
    return page;
  }

  renderTableOfContents(data) {
    let itemsHtml = '';
    chapters.forEach(ch => {
      itemsHtml += `
        <button class="toc-item-row chapter-item-btn" data-target-page="${ch.targetPage}">
          <span class="toc-roman aleja-roman">${ch.numberRoman}</span>
          <div class="toc-info">
            <span class="toc-title">${ch.title}</span>
            <span class="toc-desc">${ch.description}</span>
          </div>
          <span class="toc-dots"></span>
          <span class="toc-page-num">${ch.isUpcoming ? 'Pronto' : ch.targetPage}</span>
        </button>
      `;
    });

    return `
      <div class="toc-container">
        <div class="editorial-header">
          <div class="editorial-ornament">🩺 🌿 🤍</div>
          <h2 class="editorial-title">${data.title}</h2>
          <div class="editorial-divider aleja-divider"></div>
        </div>
        <div class="toc-list">
          ${itemsHtml}
        </div>
        <div class="toc-quote-footer">
          «Lo más valioso que me llevo del colegio fue haberte conocido. Tu felicidad siempre será la mía.»
        </div>
      </div>
    `;
  }

  renderChapterHeader(data) {
    return `
      <div class="chapter-header-screen">
        <div class="alchemy-symbol-badge">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#e07a5f" stroke-width="1.8">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
        <div class="editorial-roman aleja-roman">${data.roman}</div>
        <h2 class="chapter-main-title">${data.title}</h2>
        <h3 class="chapter-subtitle aleja-sub">${data.subtitle}</h3>
        <div class="editorial-divider aleja-divider"></div>
        <p class="chapter-poetic-quote">${data.quote}</p>
        <div class="chapter-feature-badge aleja-badge-pill">${data.badge}</div>
      </div>
    `;
  }

  renderUpcomingBirthdaySlot(data) {
    return `
      <div class="upcoming-slot-container">
        <div class="slot-motif">🎂 ✨ 💌</div>
        <h3 class="slot-title">${data.title}</h3>
        <div class="editorial-divider aleja-divider"></div>
        <div class="slot-card">
          <p class="slot-note">${data.note}</p>
          <div class="slot-countdown-stamp">
            <span>✨ Capítulo Reservado para el Autor ✨</span>
          </div>
        </div>
      </div>
    `;
  }

  renderIlluminatedLetterAleja(data) {
    const isLeft = data.part === 1 || data.pageNumber === 5;
    const imgSrc = isLeft ? 'images/carta_aleja_p5.webp' : 'images/carta_aleja_p6.webp';
    const fallbackSrc = isLeft ? 'images/carta_aleja_p5.jpg' : 'images/carta_aleja_p6.jpg';
    const folioTitle = isLeft ? 'Cartica para Alejita · Folio I' : 'Cartica para Alejita · Folio II';

    return `
      <div class="manuscript-folio-spread ${isLeft ? 'folio-left' : 'folio-right'}">
        <div class="folio-image-wrapper clean-photo-frame" data-full-img="${asset(data.highres || 'images/carta_alejita.png')}" data-caption="Cartica para Alejita: Vocación de Cuidado, Medicina y Amistad Verdadera (2814 × 1536 px)">
          <picture>
            <source srcset="${asset(imgSrc)}" type="image/webp">
            <img src="${asset(fallbackSrc)}" alt="${folioTitle}" class="manuscript-plate-img" loading="eager" />
          </picture>
          
          <!-- Sombra del lomo (gutter) para realismo tridimensional -->
          <div class="folio-gutter-shadow ${isLeft ? 'gutter-right' : 'gutter-left'}"></div>
          
          <!-- Botón refinado de aumento de manuscrito -->
          <div class="folio-zoom-hint aleja-zoom-hint" title="Toca para ampliar al 100% en alta resolución">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            <span>Ver HD</span>
          </div>

          <div class="folio-footer-indicator">— ${data.pageNumber} —</div>
        </div>
      </div>
    `;
  }

  renderMasterArtShowcase(data) {
    return `
      <div class="showcase-container aleja-showcase">
        <div class="showcase-header">
          <div class="editorial-ornament">🩺 🌿 🤍</div>
          <h2 class="showcase-title">${data.title}</h2>
          <p class="showcase-subtitle">${data.subtitle}</p>
        </div>

        <div class="clean-photo-frame showcase-frame aleja-frame" data-full-img="${asset(data.image || 'images/carta_alejita.png')}" data-caption="${data.caption}">
          <img src="${asset(data.image || 'images/carta_alejita.png')}" alt="${data.caption}" class="showcase-img" />
          <div class="showcase-lens-hint aleja-hint">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Examinar Lámina Completa en HD (2814 × 1536 px)</span>
          </div>
        </div>

        <div class="showcase-essay-block aleja-essay">
          <p class="essay-p"><strong>Vocación y Cuidado:</strong> Esta carta ilustrada reúne los símbolos del camino médico y humano de Alejita: el estetoscopio, el ritmo cardíaco, la empatía y la dedicación incansable a los demás.</p>
          <p class="essay-p"><strong>Amistad Incondicional:</strong> Desde los días compartidos en el colegio hasta hoy, una complicidad forjada en los momentos difíciles y en las mayores alegrías. «Tu felicidad siempre será la mía».</p>
        </div>
      </div>
    `;
  }

  renderHolidayChapter(data) {
    const isChristmas = data.holidayType === 'christmas';
    return `
      <div class="holiday-card-container ${data.holidayType} aleja-holiday">
        <div class="holiday-motif-top">
          ${isChristmas 
            ? '<span>🎀</span><span>🎄</span><span>✨</span><span>🎁</span><span>🎀</span>' 
            : '<span>🍇</span><span>✨</span><span>🍾</span><span>✨</span><span>🌟</span>'}
        </div>

        <h3 class="holiday-title">${data.title}</h3>
        <h4 class="holiday-salutation aleja-sub">${data.greeting}</h4>

        <div class="holiday-parchment-sheet">
          <p class="holiday-text-content">
            ${data.placeholderText}
          </p>
          <div class="holiday-signature-space aleja-sig">
            <span class="holiday-feather-icon">💌</span>
            <span class="holiday-author-line">Te quiero con todo mi corazón</span>
          </div>
        </div>

        <div class="holiday-footer-ribbon aleja-ribbon-pill">
          <span>${data.bannerText}</span>
        </div>
      </div>
    `;
  }

  renderEpilogueUpcoming(data) {
    return `
      <div class="epilogue-upcoming-screen">
        <div class="upcoming-ornament">🤍 📖 🤍</div>
        <h3 class="upcoming-title">${data.title}</h3>
        <h4 class="upcoming-subtitle aleja-sub">${data.subtitle}</h4>
        <div class="editorial-divider aleja-divider"></div>
        <p class="upcoming-note">${data.note}</p>
        <div class="upcoming-footer-stamp">
          <span>Para toda la vida</span>
        </div>
      </div>
    `;
  }
}
