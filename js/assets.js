
window.localStorage.setItem("show_ec_logs","true")
Ecwid.OnPageLoaded.add(function(page){
 

    if (page.type == 'CHECKOUT_ADDRESS') {
      var html = '<div class="ec-form__row"><div class="ec-form__cell ec-form__cell--phone"><label for="ec-phone"><div class="ec-form__title ec-header-h6"><div class="marker-required marker-required--medium"></div>Mobile (required)</div></label><div class="form-control form-control--flexible form-control--empty form-control--type-phone"><input id="ec-phone" class="form-control__text" aria-label="" autocomplete="tel" required="" type="text" name="phone"><div class="form-control__placeholder"><div class="form-control__placeholder-inner"></div></div></div></div></div>';
      $('.ec-form__cell--name').parent().addClass("before-mobile");
      var formClass = $(html).insertAfter('.before-mobile');
      console.log($('.ec-form__cell--name').parent());
      console.log("Current page is of type: " + page.type); 
    }
});