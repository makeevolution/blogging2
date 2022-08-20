"""empty message

Revision ID: a1e614f0fe66
Revises: 6434c09f4284
Create Date: 2022-06-03 10:26:52.388887

"""
from alembic import op
import sqlalchemy as sa

from config import Config


# revision identifiers, used by Alembic.
revision = 'a1e614f0fe66'
down_revision = '6434c09f4284'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('comments', schema=None, naming_convention=Config.NAMING_CONVENTION) as batch_op:
        batch_op.add_column(sa.Column('disabled', sa.Integer(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('comments', schema=None, naming_convention=Config.NAMING_CONVENTION) as batch_op:
        batch_op.drop_column('disabled')

    # ### end Alembic commands ###
