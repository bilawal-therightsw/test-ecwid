
window.localStorage.setItem("show_ec_logs","true")
Ecwid.OnPageLoaded.add(function(page){
 
    if (page.type == 'CHECKOUT_ADDRESS') {
          // var html = '<div class="ec-form__row"><div class="ec-form__cell ec-form__cell--phone"><label for="ec-phone"><div class="ec-form__title ec-header-h6"><div class="marker-required marker-required--medium"></div>Mobile (required)</div></label><div class="form-control form-control--flexible form-control--empty form-control--type-phone"><input id="ec-phone" class="form-control__text" aria-label="" autocomplete="tel" required="" type="text" name="phone"><div class="form-control__placeholder"><div class="form-control__placeholder-inner"></div></div></div></div></div>';
          // $('.ec-form__cell--name').parent().addClass("before-mobile");
          // $(html).insertAfter('.before-mobile');
          


          ec = ec || {};
          ec.order = ec.order || {};
          ec.order.extraFields = ec.order.extraFields || {};

          // The field "how_did_you_find_us" asks user about how they found the store. Drop down type
          ec.order.extraFields.how_did_you_find_us = {
              'title': 'How did you find us?',
              'type': 'select',
              'required': false,
              'selectOptions': ['Google Ads', 'Friend told me', 'TV show', 'Other'],
              'options': [
                  {'title': 'Google Ads'},
                {'title': 'Friend told me'},
                {'title': 'TV show'},
                {'title': 'Other'}
              ],
              'value': 'TV show', // Default value
              'checkoutDisplaySection': 'payment_details'
          };

          // Add pickup time selection for customer
          ec.order.extraFields.ecwid_pickup_time = {
              'title': '_msg_ShippingDetails.pickup.customer_header',
              'required': true,
              'type': 'datetime',
              'checkoutDisplaySection': 'pickup_details',
              'orderDetailsDisplaySection': 'payment_details',
          }

          // Hidden field, which is not shown at checkout
          ec.order.extraFields.my_custom_field = {
              'value': 'abcd12345'
          };

          Ecwid.refreshConfig && Ecwid.refreshConfig();
    }
});