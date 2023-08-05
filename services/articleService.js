const Article = require('../models/Article')

const getArticles = async (idCateg) => {
    try {
        let articles;
        if (idCateg) {
            articles = await Article.find({
                categorieId: idCateg
            }).populate('avis');
        } else {
            articles = await Article.find();
            console.log(articles);
        }
        return articles;
    } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
        throw error;
    }
}

const getArticleById = async (idArticle) => {
    try {
        let article = await Article.findById(idArticle).populate('avis');
        return article;
    } catch (error) {
        throw error;
    }
}


const createArticle = async (data) => {
    try {
        const newArticle = new Article(data);
        inserted = await Article.create(newArticle);
        console.log("New Article : ", inserted);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    getArticles,
    getArticleById,
    createArticle,
}
