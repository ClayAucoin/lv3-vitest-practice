import { describe, it, expect } from 'vitest';
import { makeGreeting, addSignature, toProperCase } from './greeting.js';

// makeGreeting function
describe("makeGreeting funtion", () => {
  it("should output name + occasion", () => {
    const result = makeGreeting("Alex", "Happy Birthday")
    expect(result).toBe("Happy Birthday, Alex!")
  })

  it("should handle lower case", () => {
    const result = makeGreeting("alex", "happy birthday")
    expect(result).toBe("Happy Birthday, Alex!")
  })

  it("should handle upper case", () => {
    const result = makeGreeting("ALEX", "HAPPY BIRTHDAY")
    expect(result).toBe("Happy Birthday, Alex!")
  })

  it("should handle mixed case", () => {
    const result = makeGreeting("aLeX", "hApPy BiRtHdAy")
    expect(result).toBe("Happy Birthday, Alex!")
  })

  it("should handle inverted case", () => {
    const result = makeGreeting("aLEX", "hAPPY bIRTHDAY")
    expect(result).toBe("Happy Birthday, Alex!")
  })

  it("should handle long strings with mixed case", () => {
    const result = makeGreeting("HubErt bLAiNE WOLFeSchlegelSTeINhauseNbErGErdOrff Sr.", "comE JOin oUr pARTY at LAke cHAUbUNAGuNgAmaUG")
    expect(result).toBe("Come Join Our Party At Lake Chaubunagungamaug, Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr.!")
  })
})

// addSignature function
describe("addSignature funtion", () => {
  it("should output occasion + from", () => {
    const result = addSignature("Happy New Year, Bob!", "Billy")
    expect(result).toBe("Happy New Year, Bob! - from Billy")
  })

  it("should handle lower case", () => {
    const result = addSignature("happy new year, bob!", "billy")
    expect(result).toBe("Happy New Year, Bob! - from Billy")
  })

  it("should handle upper case", () => {
    const result = addSignature("HAPPY NEW YEAR, BOB!", "BILLY")
    expect(result).toBe("Happy New Year, Bob! - from Billy")
  })

  it("should handle mixed case", () => {
    const result = addSignature("hApPy nEw yEaR, bOb!", "bIlLy")
    expect(result).toBe("Happy New Year, Bob! - from Billy")
  })

  it("should handle inverted case", () => {
    const result = addSignature("hAPPY nEW yEAR, bOB!", "bILLY")
    expect(result).toBe("Happy New Year, Bob! - from Billy")
  })

  it("should handle long strings with mixed case", () => {
    const result = addSignature("hapPy BiRThdaY, HUBert BlAINe WolfEschLEGELSTEINHaUsenbeRgeRdOrFf Sr.!", "JANicE keihAnAikUkAUakahIHuLiHEEkAHaUnAElE")
    expect(result).toBe("Happy Birthday, Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr.! - from Janice Keihanaikukauakahihuliheekahaunaele")
  })
})

// toProperCase function
describe("toProperCase function", () => {
  it("should format text with proper case", () => {
    const result = toProperCase("Proper Case")
    expect(result).toBe("Proper Case")
  })

  it("should handle lower case", () => {
    const result = toProperCase("proper case")
    expect(result).toBe("Proper Case")
  })

  it("should handle upper case", () => {
    const result = toProperCase("PROPER CASE")
    expect(result).toBe("Proper Case")
  })

  it("should handle mixed case", () => {
    const result = toProperCase("pRoPeR cAsE")
    expect(result).toBe("Proper Case")
  })

  it("should handle inverted case", () => {
    const result = toProperCase("pROPER cASE")
    expect(result).toBe("Proper Case")
  })

  it("should handle long strings with mixed case", () => {
    const result = toProperCase("HAppY birthDAY, HUBErT bLaiNe wOlfEScHlEgELStEInHAuSENbErgERDORFf sR.! - from janice keiHaNaikUKaUAkahihuLihEeKAhauNAELE")
    expect(result).toBe("Happy Birthday, Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr.! - From Janice Keihanaikukauakahihuliheekahaunaele")
  })

})