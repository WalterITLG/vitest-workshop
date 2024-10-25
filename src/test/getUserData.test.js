import { describe, expect, it, vi } from "vitest";
import { getUserData } from "../api/getUserData";

describe("getUserData function", () => {
  it("obtener datos del usuario correctamente", async () => {
    const mockApiClient = {
      get: vi.fn().mockResolvedValue({
        data: { id: 1, name: "John" },
      }),
    };
    const result = await getUserData(mockApiClient, 1);
    expect(result).toEqual({ id: 1, name: "John" });
    expect(mockApiClient.get).toHaveBeenCalledWith("/users/1");
  });
  it("manejo errores si la API falla", async () => {
    const mockApiClient = {
      get: vi.fn().mockRejectedValue(new Error("API error")),
    };

    try {
      await getUserData(mockApiClient, 1);
    } catch (error) {
      expect(error.message).toBe("API error");
    }

    expect(mockApiClient.get).toHaveBeenCalledWith("/users/1");
  });
});
