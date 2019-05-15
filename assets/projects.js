(function() {
  // const projects = [
  //   {
  //     title: 'News Scraper',
  //     deployLink: 'https://mongo-scraper-cn.herokuapp.com',
  //     githubLink: 'https://github.com/nguyenchris/mongo-news-scraper',
  //     img: './assets/images/img-10.png'
  //   },
  //   {
  //     title: 'Sports-Better',
  //     deployLink: 'https://mongo-scraper-cn.herokuapp.com',
  //     githubLink: 'https://github.com/nguyenchris/mongo-news-scraper',
  //     img: './assets/images/img-09.png'
  //   }
  // ];

  // const projectContent = document.querySelector('.proj-sec').innerHTML;
  // addClickListeners()
  // function addClickListeners() {
  //   Array.from(document.getElementsByClassName('proj-img')).forEach(elem => {
  //     elem.addEventListener('click', e => {
  //       const selectedProject = e.target.alt;
  //       const projectObj = projects.find(proj => {
  //         return (proj.title = selectedProject);
  //       });
  //       const html = `
  //       <a class="btn go-back"><i class="fa fa-chevron-left"></i>  Back to Projects </a>
  //       <div class="row">
  //         <div class="col-md-6">
  //           <div class="img-responsive">
  //             <img src="${projectObj.img}"/>
  //           </div>
  //         </div>
  //       </div>
  //       `;
  //       document.querySelector('.proj-sec').innerHTML = html;
  //       document.querySelector('.go-back').addEventListener('click', showProjectContent)
  //     });
  //   });
  // }

  // function showProjectContent() {
  //   document.querySelector('.proj-sec').innerHTML = projectContent;
  //   addClickListeners()
  // }

  // document.querySelector('.proj-img').addEventListener('click', (e) => {
  //   hideProjectContent()
  //   // const projectContent = document.querySelector('.proj-sec').children
  //   // const contentToArray = Array(projectContent)
  //   // // console.log(contentToArray)
  //   // projectContent.forEach(row => {
  //   //   row.style.display = 'none'
  //   // })
  //   // document.querySelector('.proj-sec').style.display = 'none';
  // })
})();
