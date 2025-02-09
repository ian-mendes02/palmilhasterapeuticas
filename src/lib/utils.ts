export function scrollTo(id: string, block: ScrollLogicalPosition = 'start') {
    document.getElementById(id)?.scrollIntoView({ block })
}

export function classList(...classes: (string | undefined)[]) {
    return classes.filter(str => !!str).join(' ')
}