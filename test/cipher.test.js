let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let app = require('../app');
chai.use(chaiHttp);

describe('Cipher test cases', () => {
  /*
  * Test the /POST route
  */
  describe('/POST cipher', () => {
      it('it should return cibwzb', (done) => {
          let cipherBody = {
            "string" : "bhavya",
            "key": 1
        }
        chai.request(app)
            .post('/cipher')
            .send(cipherBody)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.data.should.be.eql("cibwzb");
              done();
            });
      });
      it('it should return nrghrg', (done) => {
        let cipherBody = {
          "string" : "Koshish",
          "key": -1
      }
      chai.request(app)
          .post('/cipher')
          .send(cipherBody)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.data.should.be.eql("nrghrg");
            done();
          });
    });

  });
});