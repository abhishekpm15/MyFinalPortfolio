const addCounts = (title, number) => {
  let html = `
    <div class="col-lg-3 col-md-6 mt-5 mt-md-0">

        <div class="count-box">

            <i class="bi bi-journal-richtext"></i>

            <span data-purecounter-start="0" data-purecounter-end="${number}" data-purecounter-duration="1"
                class="purecounter"></span>

            <p>${title}</p>

        </div>

    </div>`;

  $("#counts").html($("#counts").html() + html);
};

const addSkills = (title, value, position) => {
  let html = `
    <div class="progress">

    <span class="skill">${title}<i class="val">${value}%</i></span>

    <div class="progress-bar-wrap">

      <div class="progress-bar" role="progressbar" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="100">
      </div>

    </div>

  </div>
    `;

  position == "left"
    ? $(".left").html($(".left").html() + html)
    : $(".right").html($(".right").html() + html);
};

const addPrimarySchoolEducation = (std, year, address) => {
  html = `
    <h3 class="resume-title">Primary School Education</h3>
            
              <div class="resume-item">

                <h4>${std}</h4>

                <h5>${year}</h5>

                <p><em>${address}</em></p>

              </div>

    `;

  $(".primary-school-education").html(
    $(".primary-school-education").html() + html
  );
};
const addSecondarySchoolEducation = (std, year, address) => {
  html = `
    <h3 class="resume-title">Secondary School Education</h3>
            
              <div class="resume-item">

                <h4>${std}</h4>

                <h5>${year}</h5>

                <p><em>${address}</em></p>

              </div>

    `;

  $(".secondary-school-education").html(
    $(".secondary-school-education").html() + html
  );
};
const addCollegeEducation = (std, year, address) => {
  html = `
    <h3 class="resume-title">College Education</h3>
            
              <div class="resume-item">

                <h4>${std}</h4>

                <h5>${year}</h5>

                <p><em>${address}</em></p>

              </div>

    `;

  $(".college-education").html($(".college-education").html() + html);
};

const addCertificates = (url, name, subdesc) => {
  html = `
    <div class="swiper-slide">

    <div class="testimonial-item">

      <img src="assets/img/certificates/${url}" class="testimonial-img" alt="">

      <h3>${name}</h3>

      <h4>${subdesc}</h4>

    </div>

  </div>
    `;

  $(".swiper-wrapper").html($(".swiper-wrapper").html() + html);
};

const addProject = (
  title,
  ProjectName,
  shortCategory,
  frontImg,
  htmlFile,
  subTitle
) => {
  let html = `
  <div class="col-lg-4 col-md-6 portfolio-item filter-${title.toLowerCase()}">

            <div class="portfolio-wrap">

              <img src="${frontImg}" class="img-fluid" alt="">

              <div class="portfolio-info">

                <h4>${ProjectName}</h4>

                <p>${shortCategory}</p>

                <div class="portfolio-links">

                  <a href="${frontImg}" data-gallery="portfolioGallery"
                    class="portfolio-lightbox" title="${subTitle}"><i class="bx bx-plus"></i></a>

                  <a href="${htmlFile}" class="portfolio-details-lightbox"
                    data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>

                </div>

              </div>

            </div>

          </div>
  `;

  $(".portfolio-container").html($(".portfolio-container").html() + html);
};

$.getJSON("./details.json", function (json) {
  $("title").text(json.title);
  $(".name").text(json.name);
  $("#tag-line").attr("data-typed-items", json.tagLine);
  $(".short-desc").text(json.shortDesc);
  $("#profile-pic").attr("src", json.pic);
  $("#date-of-birth").text(json.dob);
  $(".website").text(json.webURL);
  $(".website").attr("href", json.webURL);
  $(".mobile-number").text(json.number);
  $(".place").text(json.place);

  $("#age").text(json.age);
  $("#degree").text(json.degree);
  $(".mail-id").text(json.mailID);
  $("#freelance").text(json.freelance);

  $("#desc").text(json.desc);

  json.counts.map((count) => {
    addCounts(count.title, count.number);
  });
  json.skills.map((skill) => {
    addSkills(skill.title, skill.rating, skill.position);
  });

  $("#full-name").text(json.fullName);
  $("#small-desc").text(json.smallDesc);

  json.Education.primarySchool.map((school) => {
    addPrimarySchoolEducation(school.standard, school.year, school.address);
  });
  json.Education.secondarySchool.map((school) => {
    addSecondarySchoolEducation(school.standard, school.year, school.address);
  });
  json.Education.Colleges.map((college) => {
    addCollegeEducation(college.degree, college.year, college.address);
  });
  json.certificates.map((certificate) => {
    addCertificates(certificate.link, certificate.name, certificate.subdesc);
  });
  json.projectTitles.map((heading) => {
    $("#portfolio-flters").html(
      $("#portfolio-flters").html() +
        `<li data-filter=".filter-${heading.toLowerCase()}">${
          heading
        }</li>`
    );
  });

  json.projects.map((project) => {
    addProject(
      project.title,
      project.ProjectName,
      project.shortCategory,
      project.frontImg,
      project.htmlFile,
      project.subTitle
    );
  });

  json.socialMedias.map((social) => {
    $(".social-links").html(
      $(".social-links").html() +
        `<a href="${
          social.link
        }" target="_blank" class="twitter"><i class="bx bxl-${social.title.toLowerCase()}"></i></a>`
    );
  });
});
