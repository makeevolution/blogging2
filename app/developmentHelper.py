'''This script is used to help developing the blog further. These are meant to be used
by importing in a flask shell session'''
from flask import current_app
from . import db
from .models import User, Role
from random import randint
from sqlalchemy.exc import IntegrityError
from faker import Faker
from . import db
from .models import User, Post

# To use these fakers, simply call users() or posts() or other fakers

def users(count=100):
    fake = Faker()
    i = 0
    while i < count:
        u = User(email = fake.email(),
                 username = fake.user_name(),
                 password='password',
                 confirmed=True,
                 name=fake.name(),
                 location=fake.city(),
                 about_me=fake.text(),
                 member_since=fake.past_date())
        db.session.add(u)
        try:
            db.session.commit()
            i += 1
        except IntegrityError:
            db.session.rollback()
        # IntegrityError occurs if the email or username to be added already
        # exists. If so, it will retry generating another fake email.

# Create fake post, and assign it to a random user
def posts(count=100):
    fake = Faker()
    user_count = User.query.count()
    for i in range(count):
        u = db.session.query(User).offset(randint(0, user_count - 1)).first()
        p = Post(body=fake.text(),
                 timestamp=fake.past_date(),
                 author=u)
        db.session.add(p)
    db.session.commit()

class InvalidAttributeException(Exception):
    def __init__(self, message = "Attribute Invalid!"):
        super(InvalidAttributeException, self).__init__(message)
        print("")

def getAllUsers():
    return db.session.query(User).all()

# Resets all users to User role, except admin
def resetUserRoles():
    for user in getAllUsers():
        if user is None:
            continue
        if user.email ==  current_app.get("BLOGGING_ADMIN"):
            user.role = Role.query.filter_by(name="Administrator").first()
        else:
            user.role = Role.query.filter_by(default=True).first()
        db.session.add(user)
        db.session.commit()
