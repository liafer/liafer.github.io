export async function linksSaved(key) {
  const link = await localStorage.getItem(key)

  let linkSaved = JSON.parse(link) || [];

  return linkSaved;
}


export async function localLink(key, newLink){
    let linkStore = await linksSaved(key);

     const storedLink = linkStore.some( onlylink => onlylink.id === newLink.id)

    if(storedLink){
    return;
}

    linkStore.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linkStore))
}

export function deleteLink(links, id){
    let link = links.filter( item => {
        return(item.id !== id)
    })

    localStorage.setItem('@shortLink' , JSON.stringify(link));

    return link;
}