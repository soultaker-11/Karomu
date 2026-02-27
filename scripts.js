document.addEventListener('DOMContentLoaded', function(){
  updateYear();
  bindLoanForm();
  bindContactForm();
  bindReserveButtons();
  bindNavToggle();
});

function updateYear(){
  var el = document.getElementById('year');
  if(el) el.textContent = new Date().getFullYear();
}

function bindNavToggle(){
  var btn = document.getElementById('nav-toggle');
  var nav = document.getElementById('nav-links');
  if(!btn || !nav) return;
  btn.addEventListener('click', function(){
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', (!expanded).toString());
    nav.hidden = expanded;
  });
}

function bindLoanForm(){
  var form = document.getElementById('loanForm');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = form.querySelector('[name="full_name"]') ? form.querySelector('[name="full_name"]').value.trim() : '';
    var phone = form.querySelector('[name="phone"]') ? form.querySelector('[name="phone"]').value.trim() : '';
    var amount = form.querySelector('[name="loan_amount"]') ? form.querySelector('[name="loan_amount"]').value.trim() : '';
    if(!name || !phone || !amount){
      showFormStatus(form, 'Please complete required fields.', false);
      return;
    }
    var endpoint = document.querySelector('meta[name="form-endpoint"]') ? document.querySelector('meta[name="form-endpoint"]').content : '';
    var payload = {};
    Array.from(form.elements).forEach(function(el){
      if(!el.name) return;
      if(el.type === 'checkbox') payload[el.name] = el.checked;
      else if(el.type === 'radio'){
        if(el.checked) payload[el.name] = el.value;
      } else payload[el.name] = el.value;
    });
    payload.timestamp = new Date().toISOString();
    if(endpoint && endpoint !== 'REPLACE_FORM_ENDPOINT'){
      fetch(endpoint, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)})
      .then(function(r){ if(r.ok) { showFormStatus(form, 'Application submitted. We will contact you shortly.', true); form.reset(); } else { showFormStatus(form, 'Submission failed. Please try again later.', false); } })
      .catch(function(){ showFormStatus(form, 'Submission failed. Please try again later.', false); });
      return;
    }
    var owner = document.querySelector('meta[name="owner-email"]') ? document.querySelector('meta[name="owner-email"]').content : 'REPLACE_EMAIL';
    var subject = encodeURIComponent('Loan application: ' + (payload.full_name || 'Applicant'));
    var body = encodeURIComponent(JSON.stringify(payload, null, 2));
    window.location.href = 'mailto:' + owner + '?subject=' + subject + '&body=' + body;
    showFormStatus(form, 'Opened email client to submit application. Replace form endpoint to enable direct submissions.', true);
  });
}

function bindContactForm(){
  var form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = form.querySelector('[name="name"]').value.trim();
    var email = form.querySelector('[name="email"]').value.trim();
    var message = form.querySelector('[name="message"]').value.trim();
    if(!name || !email || !message){
      showFormStatus(form, 'Please complete required fields.', false);
      return;
    }
    var endpoint = document.querySelector('meta[name="form-endpoint"]') ? document.querySelector('meta[name="form-endpoint"]').content : '';
    var payload = {name:name, email:email, message:message, timestamp:new Date().toISOString()};
    if(endpoint && endpoint !== 'REPLACE_FORM_ENDPOINT'){
      fetch(endpoint, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)})
      .then(function(r){ if(r.ok){ showFormStatus(form, 'Message sent. We will reply shortly.', true); form.reset(); } else { showFormStatus(form, 'Send failed. Try again later.', false); } })
      .catch(function(){ showFormStatus(form, 'Send failed. Try again later.', false); });
      return;
    }
    var owner = document.querySelector('meta[name="owner-email"]') ? document.querySelector('meta[name="owner-email"]').content : 'REPLACE_EMAIL';
    window.location.href = 'mailto:' + owner + '?subject=' + encodeURIComponent('Contact from ' + name) + '&body=' + encodeURIComponent(message);
    showFormStatus(form, 'Opened email client to send message.', true);
  });
}

function showFormStatus(form, message, ok){
  var area = form.querySelector('.form-status');
  if(!area){
    area = document.createElement('div');
    area.className = 'form-status';
    form.appendChild(area);
  }
  area.textContent = message;
  area.style.color = ok ? 'green' : '#c05555';
  area.setAttribute('role','status');
}

function bindReserveButtons(){
  var buttons = document.querySelectorAll('.btn-reserve');
  buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
      var title = btn.getAttribute('data-title') || 'Item';
      var price = btn.getAttribute('data-price') || '';
      var owner = document.querySelector('meta[name="owner-email"]') ? document.querySelector('meta[name="owner-email"]').content : 'REPLACE_EMAIL';
      var subject = encodeURIComponent('Reservation: ' + title);
      var body = encodeURIComponent('I would like to reserve the following item:

' + title + '
Price: ' + price + '

Please contact me.
');
      window.location.href = 'mailto:' + owner + '?subject=' + subject + '&body=' + body;
    });
  });
}
