
window.localStorage.setItem("show_ec_logs","true")
Ecwid.OnPageLoaded.add(function(page){
 
    if (page.type == 'CHECKOUT_ADDRESS') {
       
          ec = ec || {};
          ec.order = ec.order || {};
          ec.order.extraFields = ec.order.extraFields || {};

          // Add pickup time selection for customer
          ec.order.extraFields.mobile = {
              'title': 'Mobile',
              'required': true,
              'type': 'number',
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