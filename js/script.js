//  function readURL(input) {
//      if (input.files && input.files[0]) {

//          var reader = new FileReader();

//          reader.onload = function (e) {
//              $('.image-upload-wrap').hide();

//              $('.file-upload-image').attr('src', e.target.result);
//              $('.file-upload-content').show();

//              $('.image-title').html(input.files[0].name);
//          };
//          reader.readAsDataURL(input.files[0]);

//      } else {
//          removeUpload();
//      }
//  }

//  function removeUpload() {
//      $('.file-upload-input').replaceWith($('.file-upload-input').clone());
//      $('.file-upload-content').hide();
//      $('.image-upload-wrap').show();
//  }
//  $('.image-upload-wrap').bind('dragover', function () {
//      $('.image-upload-wrap').addClass('image-dropping');
//  });
//  $('.image-upload-wrap').bind('dragleave', function () {
//      $('.image-upload-wrap').removeClass('image-dropping');
//  });

 
//  Second image



 function readURL2(input) {
     if (input.files && input.files[0]) {

         var reader2 = new FileReader();

         reader2.onload = function (e) {
             $('.iuw-2').hide();

             $('.ui-2').attr('src', e.target.result);
             $('.fil-uploadc-2').show();

             $('.image-title').html(input.files[0].name);
         };
         reader2.readAsDataURL(input.files[0]);

     } else {
         removeUpload2();
     }
 }

 function removeUpload2() {
     $('.fui-2').replaceWith($('.fui-2').clone());
     $('.fil-uploadc-2').hide();
     $('.iuw-2').show();
 }
 $('.iuw-2').bind('dragover', function () {
     $('.iuw-2').addClass('image-dropping2');
 });
 $('.iuw-2').bind('dragleave', function () {
     $('.iuw-2').removeClass('image-dropping2');
 });





 //THird Image
 function readURL3(input) {
     if (input.files && input.files[0]) {

         var reader3 = new FileReader();

         reader3.onload = function (e) {
             $('.iuw-3').hide();

             $('.ui-3').attr('src', e.target.result);
             $('.fil-uploadc-3').show();

             $('.image-title').html(input.files[0].name);
         };
         reader3.readAsDataURL(input.files[0]);

     } else {
         removeUpload3();
     }
 }

 function removeUpload3() {
     $('.fui-3').replaceWith($('.fui-3').clone());
     $('.fil-uploadc-3').hide();
     $('.iuw-3').show();
 }
 $('.iuw-3').bind('dragover', function () {
     $('.iuw-3').addClass('image-dropping3');
 });
 $('.iuw-3').bind('dragleave', function () {
     $('.iuw-3').removeClass('image-dropping3');
 });


 //First Image

  function readURL1(input) {
      if (input.files && input.files[0]) {

          var reader1 = new FileReader();

          reader1.onload = function (e) {
              $('.iuw-1').hide();

              $('.ui-1').attr('src', e.target.result);
              $('.fil-uploadc-1').show();

              $('.image-title').html(input.files[0].name);
          };
          reader1.readAsDataURL(input.files[0]);

      } else {
          removeUpload1();
      }
  }

  function removeUpload1() {
      $('.fui-1').replaceWith($('.fui-1').clone());
      $('.fil-uploadc-1').hide();
      $('.iuw-1').show();
  }
  $('.iuw-1').bind('dragover', function () {
      $('.iuw-1').addClass('image-dropping1');
  });
  $('.iuw-1').bind('dragleave', function () {
      $('.iuw-1').removeClass('image-dropping1');
  });

