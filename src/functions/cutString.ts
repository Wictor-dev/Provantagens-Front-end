export function cutString(text: string, cells: number){
    let len = text.length
    let textFormated = ''

    for (let i = 0; i < cells; i++){  
        if (i === len){
            break;
        } else {
            if (i == cells - 1){
                textFormated += '...'
            } else {
                textFormated += text[i]
            }
        }  

    }

    return textFormated
}