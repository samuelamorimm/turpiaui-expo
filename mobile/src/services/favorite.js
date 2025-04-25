import API from "./api"

export async function favoritePoint(item, setData) {

    try {
        const response = await API.patch(`/tourist-points/${item.id}/`, { is_favorite: !item.is_favorite })

        setData(prevData =>
            prevData.map(item_data => item.id === item_data.id ? { ...item_data, is_favorite: !item.is_favorite } : item_data)
        )

        console.log('SUCESSO AO ATUALIZAR FAVORITAÇÃO')

        //enviar para modelo de favoritos
        if (!item.is_favorite) { // se não estiver favoritado, envia

            const dataFavorite = {
                point: item.id,
                user: 1,
            }

            try {
                const response = await API.post('/favorites/', dataFavorite)
                console.log('Sucesso ao favoritar')
            } catch {
                console.log('erro ao favoritar')
            }
        } else { // se estiver, deleta

            async function getIdFavorite() {
                try {
                    const response = await API.get('/favorites/')
                    const result = response.data
                    const idResult = result.find((d) => d.point === item.id)
                    return idResult.id
                } catch (error) {
                    console.log('Erro ao buscar id do favorito')
                }
            }

            try {
                const favoriteId = await getIdFavorite()
                if (favoriteId) {
                    await API.delete(`/favorites/${favoriteId}/`)
                    console.log('Sucesso ao deletar favorito')
                } else {
                    console.log('ID do favorito não encontrado')
                }
            } catch {
                console.log('erro ao deletar')
            }
        }

    } catch (error) {
        console.log('ERRO AO ATUALIZAR FAVORITAÇÃO')
    }
}

 export async function getTouristPoints(setData) {

    try {
        const response = await API.get('/tourist-points/')
        console.log('Busca de pontos efetuada:', response.data)
        setData(response.data)
    } catch (e) {
        console.log('Erro ao realizar busca de dados.')
    }
}

