var mainProd = '4257649';
var promoProd = ['4257652',’4257658’];
var promoCodes = ['IAW195',’REFIAW699’]; //this should always be uppercase
var head = '<div class="de elHeadlineWrapper de-editable" id="headline-72651" data-de-type="headline" data-de-editing="false" data-title="headline" data-ce="true" data-trigger="none" data-animate="fade" data-delay="500" style="margin-top: 20px; cursor: pointer; outline: none; display: block;"><div class="ne elHeadline lh3 elMargin0 elBGStyle0 hsTextShadow0 elFont_raleway hsSize27" style="text-align: left;" data-bold="inherit" contenteditable="false"><b>Have a Promo Code?</b></div></div>';
var field = '<input type=\'text\' id=\'promo_code\' name=\'promo_code\' placeholder=\'Enter promo code...\' class=\'elInput elInput100 elAlign_left elInputSmall elInputStyl0 elInputBG1 elInputBR5 elInputI0 elInputIBlack elInputIRight elInputStyle1 elInputSmall garlic-auto-save\' />';
$(document).ready(function () {
	$('.elOrderProductOptions').last().after(head + field);
	$('.elOrderProductOptinProductName [value='+promoProd+']').closest('.elOrderProductOptinProducts').hide();
	$('#promo_code').on('keyup', function (ev) {
		if ($.inArray($('#promo_code').val().toUpperCase(),promoCodes) > -1) {
			$('.elOrderProductOptinProductName [value='+promoProd+']').click();
			$('.elOrderProductOptinProductName [value='+mainProd+']').closest('.elOrderProductOptinProducts').hide();
			$('.elOrderProductOptinProductName [value='+promoProd+']').closest('.elOrderProductOptinProducts').show();
		} else {
			$('.elOrderProductOptinProductName [value='+mainProd+']').click();
			$('.elOrderProductOptinProductName [value='+promoProd+']').closest('.elOrderProductOptinProducts').hide();
			$('.elOrderProductOptinProductName [value='+mainProd+']').closest('.elOrderProductOptinProducts').show();
		}
	});
});
