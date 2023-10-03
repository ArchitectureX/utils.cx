import { describe, expect, it } from '@jest/globals'

import cx from '../index'

describe('cx', () => {
  it('should concatenate string arguments', () => {
    expect(cx.join('class1', 'class2')).toBe('class1 class2')
  })

  it('should handle numbers as arguments', () => {
    expect(cx.join('class1', 123)).toBe('class1 123')
  })

  it('should flatten nested arrays', () => {
    expect(cx.join('class1', ['nested1', 'nested2'])).toBe('class1 nested1 nested2')
  })

  it('should include object keys with truthy values as class names', () => {
    const buttonStyles = {
      btn: true,
      'btn-primary': true,
      'btn-disabled': false
    }
    expect(cx.join(buttonStyles)).toBe('btn btn-primary')
  })

  it('should handle falsy values', () => {
    expect(cx.join('class1', null, undefined, false, 'class2')).toBe('class1 class2')
  })

  it('should handle mixed types', () => {
    const styles = {
      active: true,
      disabled: false
    }
    expect(cx.join('class1', 123, ['nested'], styles)).toBe('class1 123 nested active')
  })

  it('should handle no arguments', () => {
    expect(cx.join()).toBe('')
  })
})
