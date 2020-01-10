function calculateCurrentGrade() {
    var sumAllScore = 0;

    var getHWScore = document.getElementById("hwScores").value;
    var convertHW = convertArrayStringToNumber(getHWScore);
    var averageHW = averageArray(convertHW);
    //console.log(averageHW);
    var getHWWeight = parseInt(document.getElementById("hwWeight").value);
    sumAllScore += averageHW * getHWWeight * .01;
    averageColor(1,averageHW);


    var getCWScore = document.getElementById("cwScores").value;
    var convertCW = convertArrayStringToNumber(getCWScore);
    var averageCW = averageArray(convertCW);
    //console.log(averageCW);
    var getCWWeight = parseInt(document.getElementById("cwWeight").value);
    sumAllScore += averageCW * getCWWeight * .01;
    averageColor(2,averageCW);

    var getPartScore = document.getElementById("partScores").value;
    var convertPart = convertArrayStringToNumber(getPartScore);
    var averagePart = averageArray(convertPart);
    //console.log(averagePart);
    var getPartWeight = parseInt(document.getElementById("partWeight").value);
    sumAllScore += averagePart * getPartWeight * .01;
    averageColor(3,averagePart);

    var getTestScore = document.getElementById("testScores").value;
    var convertTest = convertArrayStringToNumber(getTestScore);
    var averageTest = averageArray(convertTest);
    //console.log(averageTest);
    var getTestWeight = parseInt(document.getElementById("testWeight").value);
    sumAllScore += averageTest * getTestWeight * .01;
    averageColor(4,averageTest);

    var getProScore = document.getElementById("proScores").value;
    var convertPro = convertArrayStringToNumber(getProScore);
    var averagePro = averageArray(convertPro);
    //console.log(averagePro);
    var getProWeight = parseInt(document.getElementById("proWeight").value);
    sumAllScore += averagePro * getProWeight * .01;
    averageColor(5,averagePro);

    var gradeCal = Math.ceil(sumAllScore / (getHWWeight + getCWWeight + getPartWeight + getTestWeight + getProWeight) * 100);

    if((averagePro > 100) || (averageTest > 100) || (averagePart > 100) || (averageCW > 100) || (averageHW > 100)){
        document.getElementById("c1").innerHTML = "Error, Grades Entered cannot exceed 100."
    } else {

        document.getElementById("c1").innerHTML = "Your current grade is " + gradeCal;
        return gradeCal;
           }

}

function calculateGradeNeeded(){
    var cGrade = calculateCurrentGrade();
    var getPageGrade = parseFloat(document.getElementById("gW").value);
    var getPageWeight = parseFloat(document.getElementById("lW").value);
    var curPartFinal = (cGrade/100) * (100-getPageWeight);
    var wantedPartFinal = ((getPageGrade - curPartFinal) / getPageWeight) * 100;
    //var giveFinalGrade = getPageGrade - cGrade / (getPageWeight / 100);
    var totalWeight = (parseInt(document.getElementById("hwWeight").value) + parseInt(document.getElementById("cwWeight").value) + parseInt(document.getElementById("testWeight").value) + parseInt(document.getElementById("partWeight").value) + parseInt(document.getElementById("proWeight").value));
    var allWeight = totalWeight + parseInt(document.getElementById("lW").value);
    if(allWeight !== 100){
        document.getElementById("f1").innerHTML = "Error, All Weight Values do not add up to 100.";
        return;
    }
    if((wantedPartFinal <-170) || (wantedPartFinal >170)){
        document.getElementById("f1").innerHTML = "You probably don't want to use a number that Low/High in the grades box(es). Or it could be that you simply completely failed the class. *slow clap*";
    } else {
        if(isNaN(wantedPartFinal)){
            document.getElementById("f1").innerHTML = "You entered an illegitimate value for 'Grade(s)'";
        } else {
            document.getElementById("f1").innerHTML = "You need to score " + wantedPartFinal + " to get an A+ in the class.";
        }
}


}

function convertArrayStringToNumber(string){
    var arr = string.split(",");

    for(var i =0; i < arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }

    return arr;
}

function averageArray(arr){
    var sumAll = 0;

    for(var i =0; i < arr.length; i++){
        sumAll += arr[i];
    }

    return sumAll / arr.length;
}

function averageColor(row,avg){
    if(avg >= 90){
        document.getElementById(row).style.backgroundColor = "#00FF00";
    }
    if((avg >= 79) && (avg <= 89)){
        document.getElementById(row).style.backgroundColor = "#BA55D3";
    }
    if((avg >= 69) && (avg <= 79)){
        document.getElementById(row).style.backgroundColor = "#FFFF00";
    }
    if(avg <= 69){
        document.getElementById(row).style.backgroundColor = "#0000FF";
    }
}

function resetGradeCal(){
    document.getElementById("gW").value = "";
        document.getElementById("lW").value = "";
            document.getElementById("c1").innerHTML = "";
                document.getElementById("f1").innerHTML = "";
                    document.getElementById(1).style.backgroundColor = "#ff8c69";
                        document.getElementById(2).style.backgroundColor = "#ff8c69";
                            document.getElementById(3).style.backgroundColor = "#ff8c69";
                                document.getElementById(4).style.backgroundColor = "#ff8c69";
                                    document.getElementById(5).style.backgroundColor = "#ff8c69";
                                        //console.log(resetGradeCal);
        }