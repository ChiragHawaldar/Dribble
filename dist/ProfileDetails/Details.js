document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.checkbox');
    const images = document.querySelectorAll('.image');
    const hiddenTexts = document.querySelectorAll('.hiddenText');
    const TextHeaders = document.querySelectorAll('.TextHeader');
    const Cards = document.querySelectorAll('.Card');
    const circle_checkbox = document.querySelectorAll('.circle_checkbox');
    const check = document.querySelectorAll('.check');
    
    const text = document.getElementById('text');
    const FinishBtn = document.getElementById('FinishBtn');
    const PressReturn = document.getElementById('PressReturn');



    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {

                Cards[index].classList.add('Activeboder');
                
                
                circle_checkbox[index].classList.add('move-up');
                circle_checkbox[index].style.backgroundColor = '#f62e71';

                check[index].classList.add('move-up');
                check[index].classList.add('custom_check');
                
                images[index].classList.add('move-up');
                
                TextHeaders[index].classList.add('move-up');
                
                hiddenTexts[index].classList.add('move-up');
                hiddenTexts[index].classList.remove('hiddenText');


                text.classList.remove('opacity');
                FinishBtn.classList.remove('lowOpacity');
                PressReturn.classList.remove('opacity');


            } else {
                Cards[index].classList.remove('Activeboder');

                circle_checkbox[index].classList.remove('move-up');
                circle_checkbox[index].style.backgroundColor = 'transparent';
                


                check[index].classList.remove('custom_check');
                
                images[index].classList.remove('move-up');
                
                TextHeaders[index].classList.remove('move-up');
                
                hiddenTexts[index].classList.remove('move-up');
                hiddenTexts[index].classList.add('hiddenText');


                text.classList.add('opacity');
                FinishBtn.classList.add('lowOpacity');
                PressReturn.classList.add('opacity');

            }
        });
    });
});
