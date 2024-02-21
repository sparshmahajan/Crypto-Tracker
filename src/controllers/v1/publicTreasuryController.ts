import { Request, Response } from "express";
import { getPublicTreasury } from "../../common/getPublicTreasury";
import { BadRequestError } from "../../handlers/errors";
import { ActionSuccessHandler } from "../../handlers/responses";

export const publicTreasuryController = async (req: Request, res: Response) => {
  const { coin_id } = req.params as { coin_id: "bitcoin" | "ethereum" };

  const response = await getPublicTreasury(coin_id);

  if (!response) {
    throw new BadRequestError("Invalid coin_id");
  }

  return new ActionSuccessHandler(
    res,
    "Public treasury data retrieved successfully",
    {
      data: response,
    }
  );
};
