const translations = {
    en:{
    nav_aboutus:"About Us",
    nav_services:"Services",
    nav_industries: "Industries",
    nav_resources: "Resources",
    nav_careers: "Careers",
    nav_contact: "Contact-Us",
    contact_title: "Get in touch with us for reliable, fast, and tailored digital solutions.",
    form_title: "Send us a Message",
    form_name_label: "Name",
    form_name_placeholder: "Your Name",
    form_email_label: "Email",
    form_email_placeholder: "Your Email",
    form_phone_label: "Phone",
    form_phone_placeholder: "Phone Number",
    form_subject_label: "Subject",
    form_subject_placeholder: "Subject",
    form_submit_button: "Submit",
    form_clear_button: "Clear",
    },
    ar:{
    nav_aboutus: "معلومات عنا",
    nav_services: "الخدمات",
    nav_industries:"الصناعات",
    nav_resources: "الموارد",
    nav_careers:"وظائف",
    nav_contact: "اتصل بنا",
    contact_title: "تواصل معنا للحصول على حلول رقمية موثوقة وسريعة ومصممة خصيصًا لك.",
    form_title: "أرسل لنا رسالة",
    form_name_label: "الاسم",
    form_name_placeholder: "اسمك",
    form_email_label: "البريد الإلكتروني",
    form_email_placeholder: "بريدك الإلكتروني",
    form_phone_label: "الهاتف",
    form_phone_placeholder: "رقم الهاتف",
    form_subject_label: "الموضوع",
    form_subject_placeholder: "الموضوع",
    form_submit_button: "Submit",
    form_clear_button: "Clear",
    }
}

// Toggle dropdown visibility
document.getElementById("langBtn").addEventListener("click", () => {
  const langMenu = document.getElementById("langMenu");
  langMenu.style.display = langMenu.style.display === "block" ? "none" : "block";
});




// Change language function
function changeLanguage(lang){
  // Update text content based on selected language
  document.querySelectorAll("[data-i18n]").forEach(element=>{
    const key = element.getAttribute("data-i18n");
    // Preserve Font Awesome icons by updating only the text content
    const icon = element.querySelector('i.fas, i.fab, i.fa, i.far, i.fal');
    if (icon) {
      // Keep the icon and update the text after it
      const iconHTML = icon.outerHTML;
      element.innerHTML = iconHTML + ' ' + translations[lang][key];
    } else {
      // No icon, just update the text
      element.textContent = translations[lang][key];
    }
  });

  // Update navigation translations
  if (typeof translateNavigation === 'function') {
    translateNavigation(lang);
  }

  // Apply RTL for Arabic
  if (lang === "ar") {
    document.body.classList.add("rtl");
  } else {
    document.body.classList.remove("rtl");
  }

  // Close dropdown after selection
  document.getElementById("langMenu").style.display = "none";
}


// Load English by default
changeLanguage("en");
