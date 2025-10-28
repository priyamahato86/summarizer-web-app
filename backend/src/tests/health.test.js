import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";

chai.use(chaiHttp);
const { expect } = chai;

describe("Health Route", () => {
  it("should return OK status", (done) => {
    chai
      .request(app)
      .get("/health")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equal("OK");
        done();
      });
  });
});
