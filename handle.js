const axios = require('axios');

const func1 = async (req , res) => {
    const data_profit = {
        useridx: 52870839,
        platform: 'Mlive',
        startdate: '2023-11-04',
        enddate: '2023-11-30',
        type: 1
    };

    try {
      const response = await axios.get(`http://210.246.248.97:8080/action/find_game_idx.php?data_profit=${JSON.stringify(data_profit )}`);
      
      // Assuming you want to send the response data as JSON
      res.json(response.data); 
      res.end();
      return
      
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error:', error.message);
      res.status(500).send('Internal Server Error');
    }
    
}

const func2 = (req , res) => {
    const {id , pass} = req.query;
    res.json({id , pass});
    res.end();
    return
}

module.exports = {
    func1 ,
    func2
}