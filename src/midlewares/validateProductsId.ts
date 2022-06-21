import { Request, Response, NextFunction } from 'express';

const validateProductId = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;

  if (productsIds === undefined) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }

  if (!Array.isArray(productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }

  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }

  productsIds.forEach((id) => {
    if (typeof id !== 'number') {
      return res.status(422).json({ message: '"productsIds" must include only numbers' });
    }
  });

  next();
};

export default validateProductId;
