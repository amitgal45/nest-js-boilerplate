// crypto module
import crypto, { createCipheriv, createDecipheriv, randomBytes } from 'crypto';
import * as bcrypt from 'bcrypt';

class EncryptionClass {
  private algorithm = 'aes-256-cbc';
  private initVector = "alPueMaTMLxZOGdU";
  private Securitykey = "psxGICConrNMsHkNYROLFaveokqoucqV";

  encrypt(value: string) {
    try {
      const cipher = createCipheriv(
        this.algorithm,
        this.Securitykey,
        this.initVector,
      );

      let encryptedData = cipher.update(value, 'utf-8', 'hex');
      encryptedData += cipher.final('hex');
      return encryptedData;
    } catch (err) {
        console.log(err)
        throw err
    }
  }

  decrypt(value: string) {
    try {
      const decipher = createDecipheriv(
        this.algorithm,
        this.Securitykey,
        this.initVector,
      );

      let decryptedData = decipher.update(value, 'hex', 'utf-8');
      decryptedData += decipher.final('utf8');
      return decryptedData;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async hashing(value: string) {
    try {
      const saltOrRounds = 4;
      return await bcrypt.hash(value, saltOrRounds);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async compare(value: string, hashedValue: string) {
    try {
      return await bcrypt.compare(value, hashedValue);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default new EncryptionClass();
