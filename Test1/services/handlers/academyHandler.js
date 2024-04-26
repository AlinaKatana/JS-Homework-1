const Academy = require('../../pkg/academy/academySchema');

exports.getAll = async (req, res) => {
    try {
      let academies = await Academy.find(req.query);
      res.status(200).json({
        status: 'Success',
        data: {
          academies,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
};

exports.create = async (req, res) => {
    try {
      const newAcademy = await Academy.create(req.body);
      res.status(201).json({
        status: 'Succesfuly Created',
        data: {
          academy: newAcademy,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: 'fail',
        message: err,
      });
    }
};

exports.update = async (req, res) => {
    try {
      const academy = await Academy.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({
        status: 'Succesfuly Updated',
        data: {
          academy,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
};

exports.delete = async (req, res) => {
    try {
      await Academy.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: 'Succesfuly Delited',
        data: null,
      });
    } catch (err) {
      res.status(404).json({ status: 'fail', message: err });
    }
};
