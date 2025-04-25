import { Router } from 'express';

const router = Router();

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
router.get('/users', (req, res) => {
  res.json([{ id: 1, nome: 'Maria Eduarda' }]);
});

export default router;
