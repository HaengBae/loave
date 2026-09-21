const btnRvtxt = document.querySelectorAll('.btn-rvtxt')

btnRvtxt.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        btn.closest('.review-txt').classList.toggle('fold')
        //parentElement - 부모태그, 또는 closest('태그') 근처에 있는 태그
        if(btn.closest('.review-txt').classList.contains('fold')){
            //contains = 선택한 태그가 있는 지 없느지를 선택하는 태그
            // fold 라는 클래스가 있을때 실행되는 태그
            btn.innerHTML = `더보기<img src="./img/icon-more.svg" alt="더보기 아이콘">`
        }else{
            btn.innerHTML = `접기<img src="./img/icon-more.svg" alt="접기 아이콘">`
        }
    });
});