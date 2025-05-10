const portfolioItems = [
    {
      imageSrc: "img/portfolio/MadfollowUp.png",
      thumbnailSrc: "img/portfolio/MadfollowUp.png",
      link: "https://madfollowup.com/",
      title: "This Is Folio Link1",
      caption: "This is Folio Caption",
      categories: ["all", "ilustrator"],
      lightboxTitle: "MadfollowUp"
    },
    {
      imageSrc: "img/portfolio/p02-large.jpg",
      thumbnailSrc: "img/portfolio/p02-large.jpg",
      link: "#",
      title: "This Is Folio Link2",
      caption: "This is Folio Caption",
      categories: ["all", "mobile"],
      lightboxTitle: "Image Title Here"
    },
    {
      imageSrc: "img/portfolio/p03-large.jpg",
      thumbnailSrc: "img/portfolio/p03-large.jpg",
      link: "#",
      title: "This Is Folio Link3",
      caption: "This is Folio Caption",
      categories: ["all", "mobile", "ilustrator"],
      lightboxTitle: "Image Title Here"
    },
    {
      imageSrc: "img/portfolio/p04-large.jpg",
      thumbnailSrc: "img/portfolio/p04-large.jpg",
      link: "#",
      title: "This Is Folio Link4",
      caption: "This is Folio Caption",
      categories: ["all", "mobile", "ilustrator"],
      lightboxTitle: "Image Title Here"
    },
    {
      imageSrc: "img/portfolio/p05-large.jpg",
      thumbnailSrc: "img/portfolio/p05-large.jpg",
      link: "#",
      title: "This Is Folio Link5",
      caption: "This is Folio Caption",
      categories: ["all", "mobile", "ilustrator"],
      lightboxTitle: "Image Title Here"
    },
    {
      imageSrc: "img/portfolio/p06-large.jpg",
      thumbnailSrc: "img/portfolio/p06-large.jpg",
      link: "#",
      title: "This Is Folio Link6",
      caption: "This is Folio Caption",
      categories: ["all", "ilustrator"],
      lightboxTitle: "Image Title Here"
    }
  ];

  function generatePortfolio(items) {
    let html = '';
  
    items.forEach(item => {
      html += `
        <div class="col-xs-12 col-sm-4 col-md-4 box" data-groups='${JSON.stringify(item.categories)}'>
          <div class="folio-img">
            <div class="portfolio-item">
              <div class="thumbnail">
                <div class="thumb-img">
                  <div class="link-attr">
                    <a href="${item.imageSrc}" data-gallery="global-gallery" data-toggle="lightbox" data-title="${item.lightboxTitle}" class="link-search lightbox-image animated linear"><i class="fa fa-search"></i></a>
                    <a href="${item.link}" class="link-chain animated linear" target="_blank"><i class="fa fa-chain"></i></a>
                  </div>
                  <img class="linear img-portfolio img-responsive" src="${item.thumbnailSrc}" alt="This Is Image">
                  <div class="link"><a href="${item.link}">${item.title}</a></div>
                  <div class="folio-caption">
                    <i class="fa fa-caret-up"></i>
                    <p>${item.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  
    return html;
  }
  document.getElementById('portfolio-container').innerHTML = generatePortfolio(portfolioItems);