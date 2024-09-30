import { Router } from "express";
import { body, param } from "express-validator";
import * as RequestController from "../controllers/requestController";
import { validate } from "../middleware/validationMiddleware";

const router = Router();

router.post(
  "/requests",
  [
    body("guestName").isString().withMessage("Guest name must be a string"),
    body("roomNumber")
      .isInt({ min: 1 })
      .withMessage("Room number must be a positive integer"),
    body("requestDetails")
      .isString()
      .withMessage("Request details must be a string"),
    body("priority")
      .isInt({ min: 1 })
      .withMessage("Priority must be a positive integer"),
  ],
  validate,
  RequestController.addRequest
);

router.get("/requests", RequestController.getAllRequests);

router.get(
  "/requests/:id",
  [param("id").isString()],
  validate,
  RequestController.getRequestById
);

router.put(
  "/requests/:id",
  [
    param("id").isString(),
    body("guestName")
      .optional()
      .isString()
      .withMessage("Guest name must be a string"),
    body("roomNumber")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Room number must be a positive integer"),
    body("requestDetails")
      .optional()
      .isString()
      .withMessage("Request details must be a string"),
    body("priority")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Priority must be a positive integer"),
    body("status")
      .optional()
      .isIn([
        "received",
        "in progress",
        "awaiting confirmation",
        "completed",
        "canceled",
      ])
      .withMessage("Invalid status value"),
  ],
  validate,
  RequestController.updateRequest
);

router.delete(
  "/requests/:id",
  [param("id").isString()],
  validate,
  RequestController.deleteRequest
);

router.post(
  "/requests/:id/complete",
  [param("id").isString()],
  validate,
  RequestController.completeRequest
);

export default router;
