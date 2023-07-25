const Participant = require("../model/user");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs= require('fs');

exports.RegisterTeam = async (req, res) => {

  try {
    req.body.Participants = JSON.parse(req.body.Participants);

   if (req.body.Participants[7].idn=='' && req.body.Participants[7].name==''){
      req.body.Participants.pop();
      if(req.body.Participants[6].idn=='' && req.body.Participants[6].name==''){
        req.body.Participants.pop();
      }
    }
    let p = await Participant.findOne({ 'mobile': req.body.mobile });

    if (p) {
      return res.status(200).json({
        message: "Invalid Mobile"
      })
    }

    await Participant.create(req.body);
    const teamNo = await Participant.countDocuments();
    res.status(200).json({
      message: `Team Registred successfully!! Your Team ID is: T${teamNo}`
    })
  } catch (err) {

    res.status(200).json({
      message: "One Participant cann't participant in more than 1 team"
    })
  }
}


exports.getdata = async (req, res) => {
  try {
    const participants = await Participant.find();

    const csvWriter = createCsvWriter({
      path: 'backend/participants.csv',
      header: [
        { id: 'Team', title: 'TeamCode' },
        { id: 'problem', title: 'Problem Statement' },
        { id: 'Mobile', title: 'Mobile' },
        { id: 'name', title: 'Name' },
        { id: 'idn', title: 'ID' },
        { id: 'joinAt', title: 'JoinAt' },
      ],
    });

    participants.forEach((participant) => {
      // Convert the date to Indian time (IST)
      const indianTime = new Date(participant.joinAt).toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata', // Indian time zone (IST)
        hour12: false, // Use 24-hour format
      });

      // Update the participant's joinAt property with the Indian time format
      participant.joinAt = indianTime;
    });
    const csvData = participants.flatMap((participant, key) =>
      participant.Participants.map((p) => ({
        problem: participant.problem,
        Mobile: participant.mobile,
        name: p.name,
        idn: p.idn,
        Team: `T${(key + 1)}`,
        joinAt: participant.joinAt
      }))
    );

    // Write the data to the CSV file
    await csvWriter.writeRecords(csvData);
    const filePath = 'backend/participants.csv';
    res.setHeader('Content-Disposition', `attachment; filename=participants.csv`);
    res.setHeader('Content-Type', 'text/csv');
    
    const fileStream = fs.createReadStream(filePath);
fileStream.pipe(res);

  } catch (err) {
    
    res.status(400).json({
      message: err.message
    })
  }
}


exports.verifyadmin = async (req, res) => {

  try {

    if (Number(req.body.password) == Number(process.env.PASSWORD)) {
      res.status(200).json({
        isAdmin: true
      })
    } else {
      res.status(200).json({
        isAdmin: false
      })
    }

  } catch (err) {
    res.status(200).json({
      message: err.message
    })
  }
}