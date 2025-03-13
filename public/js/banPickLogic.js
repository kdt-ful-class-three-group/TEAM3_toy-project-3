// import {arr} from './chamPick.js'


import {champstate} from "./champstate.js";

let arr = {

    blueArr :[],

//래드팀 배열
    redArr:[]


}

let clickLabel = Array.from(document.querySelectorAll(".champion-check input")); // 체크박스 배열
function banPickLogic(elements ) {
    // elements 모든 챔피언 리스트 div
    elements.forEach((elementdata) => {
        elementdata.addEventListener("click", () => {
            console.log(arr.blueArr)
            arr.blueArr.push(elementdata)
            let allChecked = clickLabel.every((input) => input.checked);

            if (allChecked) {
                let mainImg = elementdata.querySelector("img");
                champstate()                // lastSelectedChampion = mainImg.getAttribute("data-name");
                // lastSelectedImgSrc = mainImg.src;

                // if (blueBtn.style.display === "block" && blueImgIndex < 5) {
                //     let blueImgs = championblue.querySelectorAll("img");
                //     blueImgs[blueImgIndex].src = lastSelectedImgSrc;
                // } else if (redBtn.style.display === "block" && redImgIndex < 5) {
                //     let redImgs = championred.querySelectorAll("img");
                //     redImgs[redImgIndex].src = lastSelectedImgSrc;
                // }
            } else {
                alert("챔피언을 선택해주세요.");
            }
        });
    });
    // pickOverlap(elements);
}


export default banPickLogic;