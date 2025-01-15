const Movie = require('../models/Movie');

const moviesController = {
  async getTop250Movies(req, res) {
    try {
      const movies = await Movie.find().limit(250);
      res.json({ success: true, movies });
    } catch (error) {
      console.error('Error fetching top 250 movies:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  },
};

module.exports = moviesController;
