let solution = (numbers, k) => {
    let answer = 0;
    for(let i = 0; i < k; i++) {
        answer += 2;
        
        if(answer > numbers.length) {
            answer -= numbers.length;
        }
    }
    return numbers[answer - 2];
}