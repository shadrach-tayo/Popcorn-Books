import { renderHook, act } from "../../test/app-test-utils"
import useLocalStorageState from "../useLocalstorage"

const key = "__useLocalstorageHook__testkey__"

beforeAll(() => {
  jest.spyOn(window.localStorage.__proto__, "getItem");
  jest.spyOn(window.localStorage.__proto__, "setItem");
  jest.spyOn(JSON, "parse")
})

test("useLocalStorageState stores value", async () => {
  const { result: { current } } = renderHook(() => useLocalStorageState(key, ""))
  const [state] = current;
  
  expect(state).toEqual("")
  expect(localStorage.getItem).toHaveBeenCalledTimes(1)
})

test("useLocalStorageState stores default value", async () => {
  const { result: { current } } = renderHook(() => useLocalStorageState(key, "default_value"))
  const [state] = current;
  
  expect(state).toEqual("default_value")
  expect(localStorage.getItem).toHaveBeenCalledTimes(1)
  expect(localStorage.setItem).toHaveBeenCalledTimes(1)
})

test.skip("useLocalStorageState updates default value", async () => {
  const { result: { current } } = renderHook(() => useLocalStorageState(key, ""))
  const [state, setState] = current;
  
  await act(async () => {
    setState("update_store")
  })
  const update = localStorage.getItem(key);
  console.log(state, update, setState)
  expect(update).toEqual("update_store")
  expect(localStorage.setItem).toHaveBeenCalledTimes(2)
})