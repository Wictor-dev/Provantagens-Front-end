export function cutString(text: string, cells: number){
    let textFormated = ''
    for (let i = 0; i < cells; i++){       
        textFormated += text[i]
    }

    textFormated += '...'

    return textFormated
}