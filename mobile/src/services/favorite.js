import API from "./api"
import AsyncStorage from "@react-native-async-storage/async-storage"

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
        alert('ERRO AO ATUALIZAR FAVORITAÇÃO')
    }
}

export async function getTouristPoints() {

    try {
        const response = await API.get('/tourist-points/')
        console.log('Busca de pontos efetuada:', response.data)
        return response.data
    } catch (e) {
        console.log('Erro ao realizar busca de dados.')
    }
}

export async function getFavorites(setData) {
    try {
        const response = await API.get('/favorites/')
        setData(response.data)
        console.log('Busca de Favoritos efetuada:', response.data)
    } catch (e) {
        console.log('Erro ao realizar busca de dados.')
    }
}

export async function getUsername() {
    try {

        
            const username = await AsyncStorage.getItem('userName')
            if (!username) return ''; // Verifica se o nome de usuário é vazio
        
            const firstLetter = username.charAt(0).toUpperCase(); // Primeira letra maiúscula
            const remainingLetters = username.slice(1).toLowerCase(); // Resto das letras minúsculas
        
            return firstLetter + remainingLetters; // Junta a primeira letra maiúscula com o resto
    } catch (error) {
        console.log('falha ao buscar username')
    }
}
