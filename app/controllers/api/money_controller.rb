class Api::MoneyController < ApplicationController
  #skip_before_action :verify_authenticity_token, only: [:create]

  def index
    @money = Money.order(id: :desc)
  end
  
  def create
    @money = Money.new
  end

  def create
    puts "-" * 30
    puts params
    puts "-" * 30
    render json: {status: 'good'}
  end

end
