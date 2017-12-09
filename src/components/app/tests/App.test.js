import React from 'react'
import { shallow } from 'enzyme'

import App from '../App'

describe('<App />', function () {
  let app

  beforeEach(function () {
    app = shallow(<App />)
  })

  it('should render correctly', function () {
    expect(app).toBeDefined()
    expect(app.exists()).toBe(true)
  })

})