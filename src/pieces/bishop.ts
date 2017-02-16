import { Piece } from './piece';
import { Coordinates } from '../coordinates';
import { Board, Player } from '../board';

export class Bishop extends Piece {
  get weight(): number { return 2; }

  toString(): string { return this.player == Player.Human ? '♗' : '♝' };

  clone(): Piece {
    return new Bishop(this.player);
  }

  public possibleMoves(coordinates: Coordinates, board: Board) {
    return [
      ...this.possiblePathMoves(coordinates.upleftPath(), board),
      ...this.possiblePathMoves(coordinates.uprightPath(), board),
      ...this.possiblePathMoves(coordinates.downleftPath(), board),
      ...this.possiblePathMoves(coordinates.downrightPath(), board),
    ];
  }
}