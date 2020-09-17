class Player
    def hand
      puts "Enter numbers."
      puts "0:rock, 1:scissors, 2:paper"
      input_hand = gets
      while input_hand.to_i > 2 or input_hand.to_i < 0
        puts "Please enter the number again." 
        puts "0: rock, 1: scissors, 2: paper" 
        input_hand = gets
      end
      return input_hand
    end
  end
  
  class Enemy
    def hand
        prng = Random.new
        return prng.rand(0..2)
    end
  end
  
  class Janken
    def pon(player_hand, enemy_hand)
      janken = ["rock", "scissors", "paper"]
      puts "The opponent's hand is " + janken[enemy_hand]
        if player_hand.to_i == enemy_hand.to_i
            return true
        elsif (player_hand.to_i == 0 && enemy_hand.to_i == 1) || (player_hand.to_i == 1 && enemy_hand.to_i == 2) || (player_hand.to_i == 2 && enemy_hand.to_i == 0)
            puts "You win"
            return false
        else
            puts "You lose"
            return false
        end
    end
  end
  
  player = Player.new
  enemy = Enemy.new
  janken = Janken.new

  begin
    next_game = janken.pon(player.hand, enemy.hand)
  end while next_game