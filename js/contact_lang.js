const translations = {
    en:{
    nav_aboutus:"About Us",
    nav_services:"Services",
    nav_industries: "Industries",
    nav_resources: "Resources",
    nav_careers: "Careers",
    nav_contact: "Contact-Us",
    company_tagline: "Tech Redefined",
    hero_description: "Transforming ideas into innovative digital solutions",
    get_in_touch: "Get in Touch",
    contact_description: "Reach out to us for inquiries, collaborations, or to learn more about our services. We're here to help transform your ideas into reality.",
    contact_email_title: "Email",
    contact_phone_title: "Phone",
    contact_phone: "+91 98765 43210",
    contact_location_title: "Location",
    contact_location: "AWFIS, Hi-tech city<br>Hyderabad, Telangana<br>India",
    follow_us: "Follow Us",
    send_message: "Send us a Message",
    form_description: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    form_name_label: "Full Name",
    form_email_label: "Email",
    form_subject_label: "Subject",
    form_message_label: "Message",
    form_submit_button: "Send Message",
    visit_us: "Visit Us",
    get_directions: "Get Directions",
    view_larger_map: "View Larger Map",
    },
    ar:{
    nav_aboutus: "معلومات عنا",
    nav_services: "الخدمات",
    nav_industries:"الصناعات",
    nav_resources: "الموارد",
    nav_careers:"وظائف",
    nav_contact: "اتصل بنا",
    company_tagline: "التقنية مُعاد تعريفها",
    hero_description: "تحويل الأفكار إلى حلول رقمية مبتكرة",
    get_in_touch: "تواصل معنا",
    contact_description: "تواصل معنا للاستفسارات أو التعاون أو لمعرفة المزيد عن خدماتنا. نحن هنا للمساعدة في تحويل أفكارك إلى واقع.",
    contact_email_title: "البريد الإلكتروني",
    contact_phone_title: "الهاتف",
    contact_phone: "+91 98765 43210",
    contact_location_title: "الموقع",
    contact_location: "AWFIS، المدينة التكنولوجية<br>حيدر آباد، تيلانجانا<br>الهند",
    follow_us: "تابعنا",
    send_message: "أرسل لنا رسالة",
    form_description: "نود أن نسمع منك. أرسل لنا رسالة وسنرد في أقرب وقت ممكن.",
    form_name_label: "الاسم الكامل",
    form_email_label: "البريد الإلكتروني",
    form_subject_label: "الموضوع",
    form_message_label: "الرسالة",
    form_submit_button: "إرسال الرسالة",
    visit_us: "زرنا",
    get_directions: "احصل على الاتجاهات",
    view_larger_map: "عرض خريطة أكبر",
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

  // Update language button text
  const langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.textContent = lang === "ar" ? "ar" : "en";
  }

  // Store language preference
  localStorage.setItem('preferredLanguage', lang);

  // Close dropdown after selection
  document.getElementById("langMenu").style.display = "none";
}

// Load English by default
changeLanguage("en");
