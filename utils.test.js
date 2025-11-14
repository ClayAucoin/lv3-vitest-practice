// utils.test.js

import { describe, it, expect } from 'vitest';
import { add, toSnakeCase } from './utils.js';


describe('add function', () => {
  it('should add two positive numbers', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  it('should add negative numbers', () => {
    const result = add(-1, -2);
    expect(result).toBe(-3);
  });

  it('should add zero', () => {
    const result = add(5, 0);
    expect(result).toBe(5);
  });

  it('should add very large numbers', () => {
    const result = add(999999999, 1);
    expect(result).toBe(1000000000);
  });

  it('should add decimal numbers', () => {
    const result = add(3.14, 2.86);
    expect(result).toBe(6);
  });

  it('should add positive and negative numbers', () => {
    const result = add(10, -5);
    expect(result).toBe(5);
  });

  it('should add opposite values', () => {
    const result = add(5, -5);
    expect(result).toBe(0);
  });

  it('should add floating point values', () => {
    const result = add(0.1, 0.2);
    expect(result).toBeCloseTo(0.3);
  });

  it('should add teo negative numbers', () => {
    const result = add(-1, -2);
    expect(result).toBe(-3);
  });

  it('should add very small floating point values', () => {
    const result = add(0.001, 0.002);
    expect(result).toBeCloseTo(0.003);
  });

  it('should add starting with zero', () => {
    const result = add(0, 10);
    expect(result).toBe(10);
  });

});


describe('toSnakeCase function', () => {
  it('should convert text with spaces to snake_case', () => {
    const result = toSnakeCase('Hello World');
    expect(result).toBe('hello_world');
  });

  it('should convert to lowercase', () => {
    const result = toSnakeCase('HELLO WORLD');
    expect(result).toBe('hello_world');
  });

  it('should work with empty strings'), () => {
    const result = toSnakeCase("")
    expect(result.toBe(""))
  }

  it('should work with multiple spaces'), () => {
    const result = toSnakeCase("Hello  World")
    expect(result.toBe("hello____world"))
  }

  it('should work with long text'), () => {
    const result = toSnakeCase("This Is A Very Long Sentence With Many Words")
    expect(result.toBe("this_is_a_very_long_sentence_with_many_words"))
  }

  it('should work with special characters'), () => {
    const result = toSnakeCase("Hello World!")
    expect(result.toBe("hello_world!"))
  }

  it('should work with numbers in text'), () => {
    const result = toSnakeCase("Hello 123 World")
    expect(result.toBe("hello_123_world"))
  }

  it('should work with no spaces in text'), () => {
    const result = toSnakeCase("HELLOWORLD")
    expect(result.toBe("helloworld"))
  }

  it('should work with 3 spaces in text'), () => {
    const result = toSnakeCase("Hello   World")
    expect(result.toBe("hello_world"))
  }

  it('should work with mixed case in text'), () => {
    const result = toSnakeCase("HeLLo WoRLd")
    expect(result.toBe("hello_world"))
  }

  it('should replace exclamation marks with underscores', () => {
    const result = toSnakeCase('Hello World!');
    expect(result).toBe('hello_world_');
  });

  it('should replace exclamation marks with underscores', () => {
    const result = toSnakeCase('Hello World?');
    expect(result).toBe('hello_world_');
  });

  it('should replace commas with underscores', () => {
    const result = toSnakeCase('Hello, World');
    expect(result).toBe('hello__world');
  });

  it('should replace periods with underscores', () => {
    const result = toSnakeCase('Hello. World');
    expect(result).toBe('hello__world');
  });

  it('should replace semi-colons with underscores', () => {
    const result = toSnakeCase('Hello; World');
    expect(result).toBe('hello__world');
  });

  it('should replace colons with underscores', () => {
    const result = toSnakeCase('Hello: World');
    expect(result).toBe('hello__world');
  });

  it('should replace multiple punctuations with underscores', () => {
    const result = toSnakeCase('Hello!!! World???');
    expect(result).toBe('hello____world___');
  });

});

