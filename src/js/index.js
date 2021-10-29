document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.project__btn').forEach(function(tabsLang){
    tabsLang.addEventListener('click', function(ev){
      const btn = document.querySelectorAll('.project__btn');
      btn.forEach(function(btns){
        btns.classList.toggle('project__btn--active')
        if(btns.classList.contains('project__btn--active')){
          btns.disabled = true;
          btns.setAttribute('disabled', true)
        }
        else {
          btns.disabled = false;
        }
      })

      const path = ev.currentTarget.dataset.path;
      document.querySelectorAll('.project__grid-content').forEach(function(c){
        c.classList.remove('project--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('project--active')
      })
  });



  document.querySelectorAll('.services__btn').forEach(function(tabsLang){
    tabsLang.addEventListener('click', function(rev){
      const btn = document.querySelectorAll('.services__btn');
      btn.forEach(function(btns){
        btns.classList.toggle('services__btn--active')
        if(btns.classList.contains('services__btn--active')){
          btns.disabled = true;
          btns.setAttribute('disabled', true)
        }
        else {
          btns.disabled = false;
        }
      })
      const path = rev.currentTarget.dataset.path;
      document.querySelectorAll('.services__list').forEach(function(c){
        c.classList.remove('services--list-active')
      })
      document.querySelector(`[data-page="${path}"]`).classList.add('services--list-active');

      document.querySelectorAll('.completed-work__grid-container').forEach(function(ca){
        ca.classList.remove('completed-work--active')
      })
      document.querySelector(`[data-slide="${path}"]`).classList.add('completed-work--active')
      })
  })


    document.querySelector('.header__form-btn').addEventListener('click', function(){
        document.querySelector('.header__search-table-container').classList.add('header--search-active');
        document.querySelector('.header__phone-hrefs').classList.add('header--phone-close');
    })
    document.querySelector('.header__form-btn-close').addEventListener('click', function(){
      document.querySelector('.header__search-table-container').classList.remove('header--search-active');
      document.querySelector('.header__phone-hrefs').classList.remove('header--phone-close');
    })
    document.querySelector('.header__burger-btn').addEventListener('click', function(){
      document.querySelector('.header__burger-menu').classList.add('header--burger-active');
    })
    document.querySelector('.header__burger-btn-close').addEventListener('click', function(){
      document.querySelector('.header__burger-menu').classList.remove('header--burger-active');
    });

    new JustValidate('.bid-contacts__form', {
      colorWrong: '#ff3300',
      rules: {
        name: {
          required: true,
          minLength:2,
          maxLength:10,
          
        },
        mail: {
          required: true,
          email: true
        },
      },

      messages: {
        name: {
          required: 'Недопустимый формат',
          minLength: 'My custom message about only minLength rule'
        },
        mail: {
          required: 'Неведопустимый формат',
        }
      }
  });


});

