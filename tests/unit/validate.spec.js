import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import validate from '../../src/validate'

describe('validate', () => {
  it("存在.", () => {
    expect(validate).to.be.exist
  })
  it('required true 报错', () => {
    let data = {
      email: ''
    }
    let rules = [
      {key: 'email', required: true}
    ]
    let errors = validate(data, rules)
    expect(errors.email.required).to.eq('必填')
  })
  it('required true 通过', () => {
    let data = {
      email: 0
    }
    let rules = [
      {key: 'email', required: true}
    ]
    let errors = validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('pattern 报错', () => {
    let data = {
      email: '@gua.com'
    }
    let rules = [
      {key: 'email', pattern: /^.+@.+$/}
    ]
    let errors = validate(data, rules)
    expect(errors.email.pattern).to.eq('格式不正确')
  })
  it('pattern 通过', () => {
    let data = {
      email: 'gua@gua.com'
    }
    let rules = [
      {key: 'email', pattern: /^.+@.+$/}
    ]
    let errors = validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('pattern email 报错', () => {
    let data = {
      email: '@gua.com'
    }
    let rules = [
      {key: 'email', pattern: 'email'}
    ]
    let errors = validate(data, rules)
    expect(errors.email.pattern).to.eq('格式不正确')
  })
  it('pattern email 通过', () => {
    let data = {
      email: 'gua@gua.com'
    }
    let rules = [
      {key: 'email', pattern: 'email'}
    ]
    let errors = validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('required & pattern', () => {
    let data = {
      email: ''
    }
    let rules = [
      {key: 'email', pattern: 'email', required: true}
    ]
    let errors = validate(data, rules)
    expect(errors.email.required).to.exist
    expect(errors.email.pattern).to.not.exist
  })
  it('pattern & minLength', () => {
    let data = {
      email: ''
    }
    let rules = [
      {key: 'email', pattern: 'email', minLength: 6}
    ]
    let errors = validate(data, rules)
    expect(errors.email.pattern).to.exist
    expect(errors.email.minLength).to.exist
  })
  it('maxLength 报错', () => {
    let data = {
      email: '123456789'
    }
    let rules = [
      {key: 'email', maxLength: 6}
    ]
    let errors = validate(data, rules)
    expect(errors.email.maxLength).to.exist
  })
  it('many keys', () => {
    let data = {
      email: '123456789'
    }
    let rules = [
      {
        key: 'email',
        required: true,
        minLength: 1,
        maxLength: 3,
        hasNumber: true,
        hasLowerCaseAndUpperCase: true,
        hasDot: true,
        hasUnderScore: true,
        hasGua: true,
        pattern: 'email'
      }
    ]
    let fn = () => {
      validate(data, rules)
    }
    expect(fn).to.throw()
    // let errors = validate(data, rules)
    // expect(errors.email.required).to.exist
    // expect(errors.email.minLength).to.not.exist
    // expect(errors.email.maxLength).to.exist
  })
  it('test 2', () => {
    let data = {
      email: 'guakun'
    }
    validate.hasNumber = (value) => {
      if(!/\d/.test(value)) {
        return '必须含有数字'
      }
    }
    let rules = [
      {
        key: 'email',
        required: true,
        minLength: 1,
        maxLength: 3,
        hasNumber: true,
      }
    ]
    let errors
    let fn = () => {
      errors = validate(data, rules)
    }
    expect(fn).to.not.throw()
    expect(errors.email.hasNumber).to.eq('必须含有数字')
  })
})


